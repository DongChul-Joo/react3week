const express=require("express")
//간단한 서버를 제작

const request=require("request")
//다른 사이트 서버를 연결해서 데이터를 읽기

const app=express();
//서버생성

const port=3355;
// port =>0~65535 까지 (0~1023은 사용중)
// port 충돌 방지
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

//서버 대기중

app.listen(port,()=>{
    console.log("Server Start","http://localhost:3355")
})

app.get("/",(request,response)=>{
    response.send("hello node Server")
})

//몽고디비 연결

const Client=require("mongodb").MongoClient
/*
    몽고디비 => NoSql (sql문장이 없음)
    find()  => SELECT * FROM TableName
    find({mno:1}) => SELECT * FROM TableName WHERE mno=1
*/
app.get("/movie",(request,response)=>{
    // url
    var url="mongodb://211.238.142.181:27017";
    Client.connect(url,(err,client)=>{
        var db=client.db("mydb");
        //목록 전체를 출력해야 함으로 배열로 받아서 하나씩 출력해야하기에 toArray 하나만 가져올떈 x
        //callback함수로 배열로 묶은 데이터가 펑션 내 docs=object 로 전부 들어옴
        db.collection("movie").find({cateno:1}).toArray(function(err,docs) {
            response.json(docs)
            client.close();
        })
    })
})

// /movie_home?no=1
// req.query.data <-node에서 데이터 받는 문법
app.get("/movie/home",(req,resp)=>{
    var no=req.query.no; // request.getParameter("no");
    var site="";
    if(no==1)
    {
        site="searchMainDailyBoxOffice.do"
    } else if(no==2)
    {
        site="searchMainRealTicket.do"
    } else if(no==3)
    {
        site="searchMainDailySeatTicket.do"
    } else if(no==4)
    {
        site="searchMainOnlineDailyBoxOffice.do"
    }
    var url="http://www.kobis.or.kr/kobis/business/main/"+site;

    request({url:url},function (err,request,json){
        console.log(json);
        resp.json(JSON.parse(json));
    })

})

app.get('/movie_news',(request,response)=>{
    var url="mongodb://211.238.142.181:27017";
    Client.connect(url,(err,client)=>{
        var db=client.db("mydb");
        //목록 전체를 출력해야 함으로 배열로 받아서 하나씩 출력해야하기에 toArray 하나만 가져올떈 x
        //callback함수로 배열로 묶은 데이터가 펑션 내 docs=object 로 전부 들어옴
        db.collection("news").find({}).toArray(function(err,docs) {
            response.json(docs)
            client.close();
        })
    })
})

app.get('/movie_pop',(request,response)=>{
    var url="mongodb://211.238.142.181:27017";
    Client.connect(url,(err,client)=>{
        var db=client.db("mydb");
        //목록 전체를 출력해야 함으로 배열로 받아서 하나씩 출력해야하기에 toArray 하나만 가져올떈 x
        //callback함수로 배열로 묶은 데이터가 펑션 내 docs=object 로 전부 들어옴
        db.collection("news_pop").find({}).toArray(function(err,docs) {
            response.json(docs)
            client.close();
        })
    })
})

