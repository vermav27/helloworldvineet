/**
 * 
 */
var exports = module.exports{
	
	var myvalues = 
	{
		fame:"vineet",
		lname:"verma",
		fullname:function(){
			return this.fame + " " + this.lname;
			},
		age:27,
		company:"TFT"
	};
			
console.log(myvalues.fullname());

/*function join(){
return myvalues.fame ;
console.log(myvalues.fame);
}*/
//for (var key in myvalues) console.log(myvalues[key])
	
};