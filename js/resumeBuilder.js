var bio = {
  "name": "Daria Suvorova",
  "role": "Legal Tech enthusiast",
  "contacts": {
    "mobile": "+49 157 58765784",
    "email": "daria.suvorova1@gmail.com",
    "github": "DariaSu",
    "twitter": "@dariasui",
    "location": "Hamburg, Germany"
  },
  "welcomeMessage": "Cheers to my resume page!",
  "skills": ["programming", "caligraphy", "legal tech", "psychology"],
  "bioPic": "/Users/Dasha/Documents/Programming/frontend-nanodegree-resume-master/images/me.jpg"
};

var education = {
  "schools": [
    {
      "name": "University of Miami",
      "location": "Coral Gables, Florida",
      "degree": "BA",
      "majors": ["legal studies"],
      "dates": "2011-2015"
    },
    {
      "name": "University of Hamburg",
      "location": "Hamburg, Germany",
      "degree": "LLM",
      "majors": ["European legal studies"],
      "dates": "2015-2016"
    }
  ],
  "onlineCourses": [
    {
      "title": "Introduction to Programming Nanodegree",
      "school": "Udacity",
      "dates": "2017",
      "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Law firm in Hamburg",
      "title": "Paralegal",
      "location": "Hamburg, Germany",
      "dates": "Spring 2016",
      "description": "Conduct legal work, draft emails and prepare legal memorandums"
    },
    {
      "employer": "University",
      "title": "Research Assistant",
      "location": "Hamburg, Germany",
      "dates": "Autumn 2015",
      "description": "Conducting a research on statistical agencies"
    }
  ]
};

var projects = {
	"project" : [{
		"title" : "The project 1 ",
		"dates" : "2016",
		"description" : "Unusual Project",
		"images" : ["none"]
	},
	{
		"title" : "The project 2",
		"dates" : "2017",
		"description" : "Kaid back Porject",
		"images" : ["none"]
	}]
}

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBioPic);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    $('#topContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedTwitter);
    $('#topContacts').append(formattedLocation);
    $('#header').append(formattedwelcomeMsg);

    bio.skills.forEach(function(skill) {
    console.log(skill);
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills-h3").append(formattedSkill);
});
};

bio.display();

education.display = function() {
  for (var i = 0; i<education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $('.education-entry:last').append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedSchoolName);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedMajor);
    }
      $(".education").append(HTMLonlineClasses);
      $(".education-entry").append(HTMLschoolStart);

  for (var i = 0; i<education.onlineCourses.length; i++) {
      $("#education").append(HTMLSchoolStart);
      var formattedOnlineCourse= HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      $(".education-entry:last").append(formattedOnlineCourse + formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDate);
      $(".education-entry:last").append(formattedOnlineURL);
    }
}
education.display();

work.display = function() {
  	for(job in work.jobs) {
  		$("#workExperience").append(HTMLworkStart);

  		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
  		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
  		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

  		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
  	}
};

work.display();

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
};

projects.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name) {
  name = name.trim().split (" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice (0,1).toUpperCase() +
  name[0].slice(1).tolowerCase();

  return name [0] + " "+ name [1];
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
