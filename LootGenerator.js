	var	loot = [];
	

function looten() {
	
	var gegner = document.getElementById("gegnerAuswahl")
	
	switch(gegner.value) {
		case "none":
					alert("Bitte Gegnertyp waehlen...");
					break;
		
		case "kr":
					getWeapon();
					getArmor();
					var anzeige = document.getElementById('lootSpan');
					anzeige.innerHTML = "Du hast einen KRIEGER erschlagen und erhaeltst: " + loot;
					loot.length = 0; 
					break;
					
		case "or":
					getWeapon();
					getArmor();
					var anzeige = document.getElementById('lootSpan');
					anzeige.innerHTML = "Du hast einen ORK erschlagen und erhaeltst: " + loot;
					loot.length = 0;
					break;
					
		case "ba":
					getWeapon();
					getArmor();
					var anzeige = document.getElementById('lootSpan');
					anzeige.innerHTML = "Du hast einen BAUER erschlagen und erhaeltst: " + loot;
					loot.length = 0;
					break;
					
		default:
					alert("Fehler im SWITCH");
					
	}
}
	
function getWeapon() {
	var weaponRoll = Math.floor(Math.random() * ((6 - 1) + 1) +1);
	
	if (weaponRoll == 1) {loot.push(" Schwert")} 
	if (weaponRoll == 2) {loot.push(" Speer")}
	if (weaponRoll == 3) {loot.push(" Keule")}
	if (weaponRoll == 4) {loot.push(" Axt")}
	if (weaponRoll == 5) {loot.push(" Messer")}
	if (weaponRoll == 6) {loot.push(" Nichts")}
}

function getArmor() {
	var weaponRoll = Math.floor(Math.random() * ((6 - 1) + 1) +1);
	
	if (weaponRoll == 1) {loot.push(" Lederweste")} 
	if (weaponRoll == 2) {loot.push(" Kettenhemd")}
	if (weaponRoll == 3) {loot.push(" Hemd")}
	if (weaponRoll == 4) {loot.push(" Harnisch")}
	if (weaponRoll == 5) {loot.push(" Jaeckchen")}
	if (weaponRoll == 6) {loot.push(" Nichts")}
}