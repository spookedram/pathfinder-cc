var abilities = {
    "str":10,
    "dex":10,
    "con":10,
    "int":10,
    "wis":10,
    "cha":10
  };

//Primitive ability controller
///*
$(function() {
  $("input[type=number].ability").change(function() {
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
});
//*/

//Advanced ability controller
$(function() {

});

//======================================================

$(function() {
  var slider = $('input[name=level]'),
    label = $('#charLevel');

  slider.on('input', function() {
    label.text(slider.val().toString());
  });
});

//======================================================
function setRace(idx) {
  var race = races[idx];

  $("#raceName").text(race.name);
  $("#raceDesc").text(race.desc);
  $("#raceBens").text(race.benefits);
  $("#raceLangs").text(race.lang);

  $("input[name=height_feet]").val(race.height_ft);
  $("input[name=height_inches]").val(race.height_in);
  $("input[name=weight]").val(race.weight);

  if(!race.mods) {
    $("#raceMods").text("No modifiers");
  }
}

//Race controller
$(function() {
  setRace(0);
  $("#selectRace").change(function() {
   setRace($(this).val());
  });
});

//======================================================

function setJob(idx) {
  var job = jobs[idx];

  $("#className").text(job.name);
  $("#classDesc").text(job.desc);
  $("#prefWeapons").text(job.wpns);
  $("#prefArmor").text(job.armor);
  $("#suitedFor").text(job.suit);
  $("#prefAlign").text(job.alignments);
}

//Class (job) controller
$(function() {
  setJob(0);
  $("#basicJobs").change(function() {
    setJob($(this).val());
  });
  $("#presJobs").change(function() {
    setJob($(this).val());
  });
});

//======================================================

//Skill controller
$(function() {
  $("#skillTable").fixedHeaderTable({ footer: true, cloneHeadToFoot: false, fixedColumn: false });
});
