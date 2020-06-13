var gradeBook ={
	_grades: [],
	getAverage: function(){
		var total=0;
		for(var count=0;count<this._grades.length;count++){
			total += this._grades[count];
		}
		return total/this._grades.length;
	},
	addGrade: function (newGrade) {
		this._grades.push(newGrade);
	},
	getLetterGrade: function(){
		var averag=this.getAverage();
		
		if (averag>=90){ 
			return 'A';
		}
		else if(averag>=80){
			return 'B';
		}
		else if(averag>=70){ 
			return "C";
		}
		else if(averag>=60){
			return "D";
		}
		
	},

	getCountOfGrades: function(){
		return this._grades.length;
	},
	reset:function(){
		this._grades=[];
	}
	
};
exports.book = gradeBook;