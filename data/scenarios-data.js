/**
 * scenarios-data.js
 *
 * This file is the in-browser version of scenarios.csv.
 * It allows the app to run without a local server (e.g. when opening
 * index.html directly from the file system).
 *
 * HOW TO UPDATE:
 *  Option A (production): host on a server — the app will fetch scenarios.csv automatically.
 *  Option B (local testing): paste your CSV content into the SCENARIOS_CSV string below,
 *    or update the SCENARIOS_DATA array directly.
 *
 * The app prefers scenarios.csv (via fetch) and falls back to this file.
 */

window.SCENARIOS_DATA = [
  {
    "ID": "1",
    "Illustration": "placeholder.svg",
    "Scenario (EN)": "A classmate makes fun of another student for their accent during a group presentation.",
    "Scenario (NL)": "Een klasgenoot maakt iemand belachelijk vanwege hun accent tijdens een groepspresentatie.",
    "Harassment type (EN)": "Verbal Harassment",
    "Harassment type (NL)": "Verbaal grensoverschrijdend gedrag",
    "Harassment Subtype (EN)": "Mockery / Ridicule",
    "Harassment Subtype (NL)": "Spot / Belachelijk maken",
    "Correct Swipe": "left",
    "Explanation (EN)": "Mocking someone's accent is a form of verbal harassment. It targets a person's cultural identity and can cause lasting emotional harm — especially in a public setting like a presentation.",
    "Explanation (NL)": "Iemand uitlachen om hun accent is verbaal grensoverschrijdend gedrag. Het raakt iemands culturele identiteit en kan blijvende emotionele schade veroorzaken — zeker in een openbare situatie als een presentatie.",
    "Intervention tip (EN)": "Say to the classmate directly: 'That's not okay. Let's show some respect.' A direct response signals to the group that this behaviour is unacceptable.",
    "Intervention tip (NL)": "Zeg direct tegen de klasgenoot: 'Dat is niet oké. Laten we respect tonen.' Een directe reactie laat de groep weten dat dit gedrag niet acceptabel is.",
    "5D type": "Direct"
  },
  {
    "ID": "2",
    "Illustration": "placeholder.svg",
    "Scenario (EN)": "Your friend shares a private photo of someone in the group chat without their permission.",
    "Scenario (NL)": "Je vriend deelt een privéfoto van iemand in de groepsapp zonder toestemming.",
    "Harassment type (EN)": "Digital Harassment",
    "Harassment type (NL)": "Digitaal grensoverschrijdend gedrag",
    "Harassment Subtype (EN)": "Non-consensual sharing",
    "Harassment Subtype (NL)": "Delen zonder toestemming",
    "Correct Swipe": "left",
    "Explanation (EN)": "Sharing someone's private photo without consent is a serious violation of their privacy. It can constitute image-based abuse and has significant emotional and legal consequences.",
    "Explanation (NL)": "Het delen van een privéfoto van iemand zonder toestemming is een ernstige schending van de privacy. Het kan beeldmisbruik vormen en heeft aanzienlijke emotionele en juridische gevolgen.",
    "Intervention tip (EN)": "Send a private message to the person affected: 'I noticed your photo was shared without permission. Are you okay? I can help you report it.'",
    "Intervention tip (NL)": "Stuur de betrokkene een privébericht: 'Ik zag dat je foto zonder toestemming werd gedeeld. Gaat het? Ik kan je helpen het te melden.'",
    "5D type": "Delegate"
  },
  {
    "ID": "3",
    "Illustration": "placeholder.svg",
    "Scenario (EN)": "A teacher constantly criticises one student's fashion choices calling them 'out of place'.",
    "Scenario (NL)": "Een leraar bekritiseert voortdurend de kledingkeuze van één leerling en noemt die 'misplaatst'.",
    "Harassment type (EN)": "Discriminatory Harassment",
    "Harassment type (NL)": "Discriminerend grensoverschrijdend gedrag",
    "Harassment Subtype (EN)": "Appearance-based targeting",
    "Harassment Subtype (NL)": "Uiterlijkheid als doelwit",
    "Correct Swipe": "left",
    "Explanation (EN)": "Repeatedly singling out a student for their appearance — especially in a position of authority — constitutes harassment and can be a form of discrimination. It creates an unsafe learning environment.",
    "Explanation (NL)": "Een leerling herhaaldelijk aanvallen op zijn uiterlijk — zeker door iemand met gezag — is grensoverschrijdend gedrag en kan discriminatie zijn. Het creëert een onveilige leeromgeving.",
    "Intervention tip (EN)": "Note down the dates, times and what was said. If it continues, report it to a school counsellor or safeguarding officer. Documenting patterns helps build a case.",
    "Intervention tip (NL)": "Noteer de datums, tijden en wat er werd gezegd. Als het doorgaat, meld het aan een schoolcounselor of vertrouwenspersoon. Documenteren helpt een patroon aan te tonen.",
    "5D type": "Document"
  },
  {
    "ID": "4",
    "Illustration": "placeholder.svg",
    "Scenario (EN)": "Two friends joke around and playfully push each other during lunch — both are laughing.",
    "Scenario (NL)": "Twee vrienden maken grapjes en duwen elkaar speels tijdens de lunch — beiden lachen.",
    "Harassment type (EN)": "",
    "Harassment type (NL)": "",
    "Harassment Subtype (EN)": "",
    "Harassment Subtype (NL)": "",
    "Correct Swipe": "right",
    "Explanation (EN)": "This interaction looks mutual and playful — both parties are clearly enjoying themselves. Context matters: the same behaviour could be harassment if one person did not want it. Check whether both participants are comfortable.",
    "Explanation (NL)": "Deze interactie lijkt wederzijds en speels — beide partijen genieten er duidelijk van. Context is belangrijk: hetzelfde gedrag kan grensoverschrijdend zijn als één persoon het niet wil. Kijk of beide deelnemers zich op hun gemak voelen.",
    "Intervention tip (EN)": "",
    "Intervention tip (NL)": "",
    "5D type": ""
  },
  {
    "ID": "5",
    "Illustration": "placeholder.svg",
    "Scenario (EN)": "An older colleague repeatedly stands very close to a younger colleague and touches their shoulder despite them stepping away.",
    "Scenario (NL)": "Een oudere collega gaat herhaaldelijk dicht bij een jongere collega staan en raakt hun schouder aan ondanks dat ze weglopen.",
    "Harassment type (EN)": "Physical Harassment",
    "Harassment type (NL)": "Fysiek grensoverschrijdend gedrag",
    "Harassment Subtype (EN)": "Unwanted physical contact",
    "Harassment Subtype (NL)": "Ongewenst lichamelijk contact",
    "Correct Swipe": "left",
    "Explanation (EN)": "Repeated physical contact after the person has clearly tried to create distance is unwanted touching — a form of physical harassment. The power imbalance between an older and younger colleague makes it more serious.",
    "Explanation (NL)": "Herhaaldelijk lichamelijk contact nadat de persoon duidelijk afstand probeerde te nemen, is ongewenst aanraken — een vorm van fysiek grensoverschrijdend gedrag. Het machtsverschil maakt het ernstiger.",
    "Intervention tip (EN)": "Casually step between them or start a conversation with the younger colleague to interrupt the situation without confrontation. Create physical distance naturally.",
    "Intervention tip (NL)": "Stap er ontspannen tussen of begin een gesprek met de jongere collega om de situatie te onderbreken zonder confrontatie. Creëer op een natuurlijke manier fysieke afstand.",
    "5D type": "Distract"
  },
  {
    "ID": "6",
    "Illustration": "placeholder.svg",
    "Scenario (EN)": "You witness someone being harassed on public transport but the incident is over by the time you reach them.",
    "Scenario (NL)": "Je ziet iemand lastiggevallen worden in het openbaar vervoer maar de situatie is voorbij tegen de tijd dat je er bent.",
    "Harassment type (EN)": "Physical Harassment",
    "Harassment type (NL)": "Fysiek grensoverschrijdend gedrag",
    "Harassment Subtype (EN)": "Street harassment",
    "Harassment Subtype (NL)": "Straatintimidatie",
    "Correct Swipe": "down",
    "Explanation (EN)": "This is a difficult situation — the active harassment has stopped but the impact on the person may still be present. Even if it feels unclear whether to act, checking in on the person is always helpful.",
    "Explanation (NL)": "Dit is een lastige situatie — de actieve intimidatie is gestopt maar de impact op de persoon kan nog aanwezig zijn. Zelfs als het onduidelijk voelt of je moet ingrijpen, is het altijd zinvol om bij de persoon in te checken.",
    "Intervention tip (EN)": "After an incident, approach the person and ask: 'Are you okay? I saw what happened — I'm here if you need anything.' You don't need to have witnessed the whole event to offer support.",
    "Intervention tip (NL)": "Benader de persoon na het incident en vraag: 'Gaat het? Ik zag wat er gebeurde — ik ben er als je iets nodig hebt.' Je hoeft het hele incident niet te hebben gezien om steun te bieden.",
    "5D type": "Delay"
  },
  {
    "ID": "7",
    "Illustration": "placeholder.svg",
    "Scenario (EN)": "A group of students sends anonymous hurtful messages to a classmate every day.",
    "Scenario (NL)": "Een groep leerlingen stuurt elke dag anonieme kwetsende berichten naar een klasgenoot.",
    "Harassment type (EN)": "Digital Harassment",
    "Harassment type (NL)": "Digitaal grensoverschrijdend gedrag",
    "Harassment Subtype (EN)": "Cyberbullying",
    "Harassment Subtype (NL)": "Cyberpesten",
    "Correct Swipe": "left",
    "Explanation (EN)": "Daily anonymous hurtful messages are a clear pattern of cyberbullying — a form of digital harassment. Even when anonymous the impact on the target is severe and can have serious mental health consequences.",
    "Explanation (NL)": "Dagelijks anonieme kwetsende berichten vormen een duidelijk patroon van cyberpesten — een vorm van digitaal grensoverschrijdend gedrag. Zelfs als het anoniem is, is de impact op het slachtoffer ernstig.",
    "Intervention tip (EN)": "Delegate to a trusted adult or institution — a teacher, school counsellor, or platform administrator. You don't have to handle this alone; involving the right authority figure is the most effective step.",
    "Intervention tip (NL)": "Delegeer naar een betrouwbare volwassene of instantie — een leraar, schoolcounselor of platformbeheerder. Je hoeft dit niet alleen te doen; de juiste autoriteit inschakelen is de meest effectieve stap.",
    "5D type": "Delegate"
  },
  {
    "ID": "8",
    "Illustration": "placeholder.svg",
    "Scenario (EN)": "A manager makes an 'off-the-cuff' comment about a female employee's appearance in front of the team.",
    "Scenario (NL)": "Een manager maakt een 'ongedwongen' opmerking over het uiterlijk van een vrouwelijke medewerker voor het hele team.",
    "Harassment type (EN)": "Sexual Harassment",
    "Harassment type (NL)": "Seksuele intimidatie",
    "Harassment Subtype (EN)": "Verbal sexual harassment",
    "Harassment Subtype (NL)": "Verbale seksuele intimidatie",
    "Correct Swipe": "left",
    "Explanation (EN)": "Comments about a colleague's appearance — especially from someone in a position of power — can constitute sexual harassment even when framed as casual. It creates an uncomfortable and unequal working environment.",
    "Explanation (NL)": "Opmerkingen over het uiterlijk van een collega — zeker van iemand met gezag — kunnen seksuele intimidatie vormen, ook als ze als ongedwongen worden gepresenteerd. Het creëert een ongemakkelijke en ongelijke werkomgeving.",
    "Intervention tip (EN)": "After the meeting, privately let the affected colleague know: 'That comment was out of line. I'll back you up if you want to raise it with HR.'",
    "Intervention tip (NL)": "Laat de betrokken collega na de vergadering privé weten: 'Die opmerking was ongepast. Ik sta achter je als je het wil aankaarten bij HR.'",
    "5D type": "Direct"
  }
];
