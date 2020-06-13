var book = require("../lib/grades").book;


exports["setUp"]=function(callback){
	book.reset();
	callback();
};


exports["Can compute letter grade of A"]=function(test){
	book.addGrade(90);
	book.addGrade(100);

	var result = book.getLetterGrade();

	test.equal(result,'A');
	test.done();
};

exports["Can compute letter grades of B"]=function(test){
	book.addGrade(80);
	book.addGrade(90);

	var result=book.getLetterGrade();

	test.equal(result,'B');
	test.done();
};

exports["Can compute letter grades of C"]=function(test){
	book.addGrade(80);
	book.addGrade(70);

	var result=book.getLetterGrade();

	test.equal(result,'C');
	test.done();
};

exports["Can averge grades"]=function(test){
	book.addGrade(100);
	book.addGrade(50);

	var averge=book.getAverage();

	test.equal(averge,75);
	test.done();

};


exports["Can add new grade"] = function(test) {
	book.addGrade(90);
	var count = book.getCountOfGrades();
	test.equal(count ,1);
	test.done();
};
