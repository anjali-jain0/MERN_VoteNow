var express=require('express');

var app=express();

var bodyParser=require('body-parser');

var urlencodedParser=bodyParser.urlencoded({extended: false});

var mongoose=require('mongoose');

mongoose.connect('mongodb://mern_vote:votefor1@ds151530.mlab.com:51530/mern_vote');

var UserSchema = new mongoose.Schema({
	name:String,
	email:String,
	votes:String,
	facemashes:String,
	ranking:String,
	views:String,
	password:String
}); 

var Topuser= mongoose.model('Topuser',UserSchema);

var topuser1=Topuser({password:'2',name:'usr1',email:'usr1@gmail.com',votes:'2',facemashes:'5',ranking:'10',views:'3'}).save(function(err){
	if(err) throw err;
});
var topuser2=Topuser({password:'3',name:'usr2',email:'usr2@gmail.com',votes:'7',facemashes:'0',ranking:'6',views:'13'}).save(function(err){
	if(err) throw err;
});
var topuser3=Topuser({password:'4',name:'usr3',email:'usr3@gmail.com',votes:'12',facemashes:'1',ranking:'1',views:'20'}).save(function(err){
	if(err) throw err;
});
var topuser4=Topuser({password:'5',name:'usr4',email:'usr4@gmail.com',votes:'0',facemashes:'4',ranking:'20',views:'1'}).save(function(err){
	if(err) throw err;
});
var topuser5=Topuser({password:'1',name:'Anjali',email:'jain1@gmail.com',votes:'3',facemashes:'1',ranking:'2',views:'10'}).save(function(err){
	if(err) throw err;
});

app.get('/topusers',function(req,res){

	Topuser.find({},function(err,data){
		if(err) throw err;
		res.json(data);
	});
});

app.get('/user/:email/:pwd',function(req,res){
	
	var query={email:req.params.email,password:req.params.pwd};
	Topuser.find(query,function(err,data){
		if(err) throw err;
		if(data.length>0){
		res.send(data[0]);
	}}) 
	
});

app.post('/newuser/:email/:pwd/:fname/:lname',function(req,res){
	
	var user6=Topuser({password:req.params.pwd,name:req.params.fname + ' ' + req.params.lname,email:req.params.email,votes:'0',facemashes:'0',ranking:'0',views:'0'}).save(function(err){
	if(err) throw err;
	console.log('added');
});
	
});

app.get('/changeprofile/:id/:email/:name',function(req,res){

	const query = {_id:req.params.id};
	const newName = req.params.name;
	const newEmail = req.params.email;
	Topuser.find(query,function(err,data){
		if(err) throw err;
		if(data.length > 0){
			console.log(data);
			const email = data[0].email;
			const name = data[0].name;
			Topuser.update(query,{email:newEmail,name:newName},function(err){
				if(err) throw err;
				console.log('up');
			});
		}
	});
});

app.get('/mainpage',function(req,res){

	Topuser.find({},function(err,data){
		if(err) throw err;
		res.json(data);
	});
});

app.get('/votedUser/:id',function(req,res){

	var query = {_id:req.params.id};
	console.log(req.params.id);
	Topuser.find(query,function(err,data){
		if(err) throw err;
		if(data.length >0){
			const vote = Number(data[0].votes)+1;
			Topuser.update(query,{votes:vote},function(err){
				if(err) throw err;
				console.log('updated');
			});
	    }
	});

});

app.get('/followedpost')
app.listen('8080');