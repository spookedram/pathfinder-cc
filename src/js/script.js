//Primitive Ability Score Controller
$("input[type=number].ability").on("input", function() {
  var value = $(this).val();
  var modVal = value - 10;
  var label = "";

  if(modVal > 0) {
    label = "+ " + modVal.toString();
  } else if(modVal < 0) {
    modVal *= -1;
    label = "- " + modVal.toString();
  } else {
    label = "0";
  }

  $(this).parent().next(".mod-cell").text(label);
});

//======================================================
//Character Level Slider Controller
var slider = $("input[name=level]");
var label = $("#charLevel");

slider.on("input", function() {
  label.text(slider.val().toString());
});

//======================================================
//Race Selection Controller
function setRace(idx) {
  var race = races[idx];

  $("#raceName").text(race.name);
  $("#raceMods").text(race.mods);
  $("#raceSpd").text(race.spd + " feet");
  $("#raceSize").text(race.size);
  $("#raceDesc").text(race.desc);
  $("#raceTraits").text(race.traits);
  $("#raceLangs").text(race.lang);
  $("#raceLink").text(race.name);
  $("#raceLink").attr("href", race.link);
  $("input[name=height_feet]").val(race.height_ft);
  $("input[name=height_inches]").val(race.height_in);
  $("input[name=weight]").val(race.weight);
}

var customRace = false;

$("#customRace").on("click", function() {
  if(!customRace) {
    customRace = true;
    $("#selectRace").attr("disabled", true);
    $(".raceText").attr("contentEditable", true);
    $(this).css("background-color", "lightgray");
    setRace(0);
  } else {
    customRace = false;
    $("#selectRace").attr("disabled", false);
    $(".raceText").attr("contentEditable", false);
    $(this).css("background-color", "white");
    setRace(1);
  }
});

setRace(1); //Initialize race info to human

$("#selectRace").on("input", function() {
 setRace($(this).val());
});

//======================================================
//Class Selection Controller
function setJob(idx) {
  var job = jobs[idx];

  $("#className").text(job.name);
  $("#classDesc").text(job.desc);
  $("#prefWeapons").text(job.wpns);
  $("#prefArmor").text(job.armor);
  $("#suitedFor").text(job.suit);
  $("#prefAlign").text(job.alignments);
}

var customJob = false;

$("#customJob").on("click", function() {
  if(!customJob) {
    customJob = true;
    $("#basicJobs").attr("disabled", true);
    $(".jobText").attr("contentEditable", true);
    $(this).css("background-color", "lightgray");
    setJob(0);
  } else {
    customJob = false;
    $("#basicJobs").attr("disabled", false);
    $(".jobText").attr("contentEditable", false);
    $(this).css("background-color", "white");
    setJob(1);
  }
});

setJob(1); //Initialize class info to barbarian

$("#basicJobs").on("input", function() {
  setJob($(this).val());
});

//======================================================
