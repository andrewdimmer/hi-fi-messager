export const initAudio = () => {
  const element = document.getElementById("audio_div");
  if (element) {
    let innerHTML = `<audio controls id="A_Audio"><source src="${window.location.href}/assets/audio/43404__simkiott__record-scratch.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="B_Audio"><source src="${window.location.href}/assets/audio/56401__oliver-eye__jsplash2.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="C_Audio"><source src="${window.location.href}/assets/audio/103525__mik300z__r2-talk.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="D_Audio"><source src="${window.location.href}/assets/audio/124907__greencouch__bleeps-double-4.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="E_Audio"><source src="${window.location.href}/assets/audio/140867__juskiddink__boing.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="F_Audio"><source src="${window.location.href}/assets/audio/161153__dj-burnham__bike-horn.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="G_Audio"><source src="${window.location.href}/assets/audio/170230__roachpowder__stone-pale-ale-bottle-clank.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="F_Audio"><source src="${window.location.href}/assets/audio/178820__felfa__busy-signal-us.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="I_Audio"><source src="${window.location.href}/assets/audio/188869__plingativator__jawharp-boing.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="J_Audio"><source src="${window.location.href}/assets/audio/198162__18hiltc__darth-vader-breathing.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="K_Audio"><source src="${window.location.href}/assets/audio/198876__bone666138__crash.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="L_Audio"><source src="${window.location.href}/assets/audio/217351__vkproduktion__deflating-balloon.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="M_Audio"><source src="${window.location.href}/assets/audio/219506__jarredgibb__microwave-bleeps-01.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="N_Audio"><source src="${window.location.href}/assets/audio/221642__eggsandwichent__ba-dum-bum-all.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="O_Audio"><source src="${window.location.href}/assets/audio/446000__breviceps__fart-3.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="P_Audio"><source src="${window.location.href}/assets/audio/245740__2mbst1__ruelps-18.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="Q_Audio"><source src="${window.location.href}/assets/audio/249550__fngersounds__dong1.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="R_Audio"><source src="${window.location.href}/assets/audio/258020__kodack__arcade-bleep-sound.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="S_Audio"><source src="${window.location.href}/assets/audio/273984__metaepitome__cartoon-sound-02.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="T_Audio"><source src="${window.location.href}/assets/audio/276046__obxjohn__cartoon-clearing-head-sound.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="U_Audio"><source src="${window.location.href}/assets/audio/277044__bnabors1__a-very-nice-burp.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="V_Audio"><source src="${window.location.href}/assets/audio/386857__bustercherry__squeaky-ringer.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="W_Audio"><source src="${window.location.href}/assets/audio/345689__inspectorj__comedic-boing-a.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="X_Audio"><source src="${window.location.href}/assets/audio/348791__nebyoolae__toy-ducks-quacking.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="Y_Audio"><source src="${window.location.href}/assets/audio/377639__danarobinsondesignsgmailcom__b15.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="Z_Audio"><source src="${window.location.href}/assets/audio/384188__inspectorj__rooster-crowing-a.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="SPACE_Audio"><source src="${window.location.href}/assets/audio/345688__inspectorj__comedic-whistle-a.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="ENTER_Audio"><source src="${window.location.href}/assets/audio/389288__themaggotr__xilofono-sound-wet.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="NUM1_Audio"><source src="${window.location.href}/assets/audio/410751__plantmonkey__arrow-strike.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="SLASH_Audio"><source src="${window.location.href}/assets/audio/418106__crazymonke9__single-dog-bark-2.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="PERIOD_Audio"><source src="${window.location.href}/assets/audio/442906__qubodup__pig-oink.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="COMMA_Audio"><source src="${window.location.href}/assets/audio/232927__bmusic92__mac-start-up.wav" type="audio/wav" /></audio>`;
    innerHTML += `<audio controls id="HTTPS_Audio"><source src="${window.location.href}/assets/audio/203512__blueneon__56k-modem.wav" type="audio/wav" /></audio>`;
    element.innerHTML = innerHTML;
  }
};

export const playAudioForCharacter = (key: string) => {
  const element = document.getElementById(
    `${key}_Audio`
  ) as HTMLAudioElement | null;
  if (element) {
    element.play();
    return element.duration;
  }
  return 0;
};
