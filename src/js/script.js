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

setRace(0); //Initialize race info to human

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

setJob(0); //Initialize class info to barbarian

$("#basicJobs").on("input", function() {
  setJob($(this).val());
});

$("#presJobs").on("input", function() {
  setJob($(this).val());
});

//======================================================
