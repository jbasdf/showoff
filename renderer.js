// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var DMX = require('dmx');
var A = DMX.Animation;

var devices = {
  'adj-mega-par-64': {
    channels: ['red', 'green', 'blue', 'uv', 'strobe', 'dimmer', 'program_selection', 'activity', 'sensitivity', 'dimmer_curves'],
    ranges: {
      'red': {
        'type': 'slider',
        'min': 0,
        'max': 255
      },
      'green': {
        'type': 'slider',
        'min': 0,
        'max': 255
      },
      'blue': {
        'type': 'slider',
        'min': 0,
        'max': 255
      },
      'uv': {
        'type': 'slider',
        'min': 0,
        'max': 255
      },
      'strobe': {
        'type': 'option',
        'options': [
          {'value':   0, 'label': 'Off'},
          {'value':  32, 'label': 'On'},
          {'value':  64, 'label': 'Strobing slow-fast'},
          {'value':  96, 'label': 'On'},
          {'value': 128, 'label': 'Strobe pulse slow-fast'},
          {'value': 160, 'label': 'On'},
          {'value': 192, 'label': 'Random strobe slow-fast'},
          {'value': 224, 'label': 'On'}
        ]
      },
      'dimmer': {
        'type': 'slider',
        'min': 0,
        'max': 255
      },
      'program_selection': {
        'type': 'option',
        'options': [
          {'value':   0, 'label': 'Dimming mode'},
          {'value':  52, 'label': 'Color macro mode'},
          {'value': 103, 'label': 'Color change mode'},
          {'value': 154, 'label': 'Color fade mode'},
          {'value': 205, 'label': 'Sound active mode'}
        ]
      },
      'activity': {
        'type': 'option',
        'options': [
          {'value':   0, 'label': 'Color Change 1 / Color Fade 1 / Sound Active 1'},
          {'value':  16, 'label': 'Color Change 2 / Color Fade 2 / Sound Active 2'},
          {'value':  32, 'label': 'Color Change 3 / Color Fade 3 / Sound Active 3'},
          {'value':  48, 'label': 'Color Change 4 / Color Fade 4 / Sound Active 4'},
          {'value':  64, 'label': 'Color Change 5 / Color Fade 5 / Sound Active 5'},
          {'value':  80, 'label': 'Color Change 6 / Color Fade 6 / Sound Active 6'},
          {'value':  96, 'label': 'Color Change 7 / Color Fade 7 / Sound Active 7'},
          {'value': 112, 'label': 'Color Change 8 / Color Fade 8 / Sound Active 8'},
          {'value': 128, 'label': 'Color Change 9 / Color Fade 9 / Sound Active 9'},
          {'value': 144, 'label': 'Color Change 10 / Color Fade 10 / Sound Active 10'},
          {'value': 160, 'label': 'Color Change 11 / Color Fade 11 / Sound Active 11'},
          {'value': 176, 'label': 'Color Change 12 / Color Fade 12 / Sound Active 12'},
          {'value': 192, 'label': 'Color Change 13 / Color Fade 13 / Sound Active 13'},
          {'value': 208, 'label': 'Color Change 14 / Color Fade 14 / Sound Active 14'},
          {'value': 224, 'label': 'Color Change 15 / Color Fade 15 / Sound Active 15'},
          {'value': 240, 'label': 'Color Change 16 / Color Fade 16 / Sound Active 16'}
        ]
      },
      'sensitivity': {
        'type': 'slider',
        'min': 0,
        'max': 255
      },
      'dimmer_curves': {
        'type': 'option',
        'options': [
          {'value':   0, 'label': 'Standard'},
          {'value':  21, 'label': 'Stage'},
          {'value':  41, 'label': 'TV'},
          {'value':  61, 'label': 'Architectural'},
          {'value':  81, 'label': 'Theatre'},
          {'value': 101, 'label': 'Default'}
        ]
      },
    }
  }
};

var dmx = new DMX();

// run `ls /dev/cu.*` to see a list of serial devices on the mac
var universe = dmx.addUniverse('demo', 'enttec-open-usb-dmx', '/dev/cu.usbserial-EN174043')

var on = false;
setInterval(function(){
  if(on){
    on = false;
    universe.updateAll(0);
    console.log("off");
  }else{
    on = true;
    universe.updateAll(250);
    console.log("on");
  }
}, 1000);