"use strict";!function(){new Tone.Freeverb(.3,1e4).receive("reverb").toMaster(),new Tone.Freeverb(.4,1e4).receive("reverb").toMaster(),new Tone.Freeverb(.9,1e4).receive("reverb").toMaster(),new Tone.PingPongDelay({delayTime:"8n",feedback:.6,wet:.5}).toMaster(),new Tone.Sampler({A2:"snare.[mp3|ogg]",A1:"kick.[mp3|ogg]"},{release:1,baseUrl:"https://raw.githubusercontent.com/Tonejs/Tone.js/master/examples/audio/505/"}).toMaster();var e=new Tone.MembraneSynth({envelope:{sustain:0,attack:.02,decay:.8},octaves:10}).toMaster(),n=(new Tone.Loop(function(n){e.triggerAttackRelease("C1","10hz",n)},"2n").start(0),new Tone.Synth({volume:-15,oscillator:{type:"amtriangle",harmonicity:.5,modulationType:"square"},envelope:{attackCurve:"exponential",attack:.1,decay:.5,sustain:.5,release:2},portamento:.02}).toMaster());new Tone.Sequence(function(e,l){n.triggerAttackRelease(l,"10hz",e)},["Bb3",[[null,null],["Bb3","A3"]],"Bb3",[[null,null],["Bb3","A3"]],[["Bb3"],[null,"C4"]],[["C4"],[null,"Eb4"]],"Eb4",[null,["D4","Bb3"]],[["C4"],[null,"A3"]],[["F3"],["D4","Bb3"]],"C4",[[null],["F4","Bb3"]],[["Eb4"],[null,"D4"]],[["D4"],[null,"C4"]],"C4",null,"Bb3",[["A3"],["Bb4","A4"]],"Bb4",[[null,null],["Bb4","A4"]],"Bb4",[[null,null],["Bb4","A4"]],[["Bb4"],[null,"C5"]],[["C5"],[null,"Eb5"]],"Eb5",[null,["D5","Bb4"]],[["C5"],[null,"A4"]],[["F4"],["D5","Bb4"]],"C5",[[null],["F5","Bb4"]],[["Eb5"],[null,"D5"]],[["D5"],[null,"C5"]],"C5",[null,["Bb5","A5"]],["Bb5","F5"],["Eb5",["Bb5","A5"]],["Bb5","F5"],["Eb5",["Bb5","A5"]],[["A5","Bb5"],null],["F5","Bb4"],"Ab5",[null,["Bb5","A5"]]]).start(0).probability=.9;var l=new Tone.MonoSynth({volume:-20,oscillator:{type:"square"},envelope:{attack:.05,decay:.3,sustain:.4,release:.8},filterEnvelope:{attack:.001,decay:.7,sustain:.1,release:.8,baseFrequency:200,octaves:4}}).toMaster();new Tone.Sequence(function(e,n){l.triggerAttackRelease(n,"3hz",e)},["Bb1",null,"Eb1",null,"Bb1",null,"Bb1",["Bb1","Bb1"],"F1",["F1","Bb1"],"F1",[null,"D1"],["Eb1",[null,"F1"]],["F1",[null,"F1"]],"F1","F1",[null,["F1"]],[null,["F1"]],"Bb1","Bb1","Eb1","Eb1","Bb1",["Bb1",[null,"F2"]],"Bb1",["Bb1","Bb1"],"F1",["F2","F2"],"F1",["F1","D1"],["G1",[null,"F1"]],["F1",[null,"F1"]],"F1","F1","Bb1",["Eb1","Eb1"],"Bb1",["Eb1","Eb1"],"Bb1","Bb2",["Eb1","Eb1"],["Eb1","F1"]]).start(0).probability=.9,Tone.Transport.bpm.value=60,document.querySelector("body").addEventListener("click",function(){Tone.Transport.start("+0.1")})}();