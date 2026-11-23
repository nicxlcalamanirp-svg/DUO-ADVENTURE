const http=require('http'),fs=require('fs'),{WebSocketServer}=require('ws');
const srv=http.createServer((q,s)=>{s.setHeader('Content-Type','text/html; charset=utf-8');s.end(fs.readFileSync(__dirname+'/index.html'))});
const wss=new WebSocketServer({server:srv}),rooms={};
wss.on('connection',ws=>{
  ws.on('message',d=>{let m;try{m=JSON.parse(d)}catch{return}
    if(m.t=='j'){ws.room=m.room;ws.id=m.id;const r=rooms[m.room]=rooms[m.room]||new Set();
      if(r.size>=2)return ws.close();
      r.forEach(o=>{if(o.last)ws.send(JSON.stringify({t:'p',id:o.id,p:o.last}))});r.add(ws)}
    else if(m.t=='p'&&ws.room){ws.last=m.p;rooms[ws.room].forEach(o=>o!==ws&&o.readyState==1&&o.send(JSON.stringify({t:'p',id:ws.id,p:m.p})))}});
  ws.on('close',()=>{const r=rooms[ws.room];if(!r)return;r.delete(ws);r.forEach(o=>o.send(JSON.stringify({t:'l',id:ws.id})));if(!r.size)delete rooms[ws.room]});
});
srv.listen(process.env.PORT||3000,()=>console.log('DUO ADVENTURE en http://localhost:'+(process.env.PORT||3000)));
