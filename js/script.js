let text = '';
let shift = 0;
let caps = 0;
let arr = [8, 9, 13, 16, 32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 186, 187, 188, 189, 190, 191, 192, 219, 220, 221, 222];

window.addEventListener('keydown', event => {

   if (arr.includes(event.keyCode)) {
      document.getElementById(event.code).classList.add('active');
   }
   
   event.preventDefault();

   switch (event.code) {
      case 'Backquote':
         if (shift) text += '~';
         else text += '`';
         break

      case 'Digit1':
         if (shift) text += '!';
         else text += '1';
         break

      case 'Digit2':
         if (shift) text += '@';
         else text += '2';
         break

      case 'Digit3':
         if (shift) text += '#';
         else text += '3';
         break

      case 'Digit4':
         if (shift) text += '$';
         else text += '4';
         break

      case 'Digit5':
         if (shift) text += '%';
         else text += '5';
         break

      case 'Digit6':
         if (shift) text += '^';
         else text += '6';
         break

      case 'Digit7':
         if (shift) text += '&';
         else text += '7';
         break

      case 'Digit8':
         if (shift) text += '*';
         else text += '8';
         break

      case 'Digit9':
         if (shift) text += '(';
         else text += '9';
         break

      case 'Digit0':
         if (shift) text += ')';
         else text += '0';
         break

      case 'Minus':
         if (shift) text += '_';
         else text += '-';
         break

      case 'Equal':
         if (shift) text += '+';
         else text += '=';
         break

      case 'Backspace':
         text = text.slice(0, -1);
         break

      case 'Tab':
         text += '\t'
         break

      case 'KeyQ':
         if (caps - shift) text += 'Q';
         else text += 'q';
         break

      case 'KeyW':
         if (caps - shift) text += 'W';
         else text += 'w';
         break

      case 'KeyE':
         if (caps - shift) text += 'E';
         else text += 'e';
         break

      case 'KeyR':
         if (caps - shift) text += 'R';
         else text += 'r';
         break

      case 'KeyT':
         if (caps - shift) text += 'T';
         else text += 't';
         break

      case 'KeyY':
         if (caps - shift) text += 'Y';
         else text += 'y';
         break

      case 'KeyU':
         if (caps - shift) text += 'U';
         else text += 'u';
         break

      case 'KeyI':
         if (caps - shift) text += 'I';
         else text += 'i';
         break

      case 'KeyO':
         if (caps - shift) text += 'O';
         else text += 'o';
         break

      case 'KeyP':
         if (caps - shift) text += 'P';
         else text += 'p';
         break

      case 'BracketLeft':
         if (shift) text += '{';
         else text += '['
         break

      case 'BracketRight':
         if (shift) text += '}';
         else text += ']'
         break

      case 'Backslash':
         if (shift) text += '|';
         else text += '\\';
         break

      case 'CapsLock':
         if (caps) caps = 0;
         else caps = 1;
         document.getElementById('CapsLock').classList.toggle('active');
         break

      case 'KeyA':
         if (caps - shift) text += 'A';
         else text += 'a';
         break

      case 'KeyS':
         if (caps - shift) text += 'S';
         else text += 's';
         break

      case 'KeyD':
         if (caps - shift) text += 'D';
         else text += 'd';
         break

      case 'KeyF':
         if (caps - shift) text += 'F';
         else text += 'f';
         break

      case 'KeyG':
         if (caps - shift) text += 'G';
         else text += 'g';
         break

      case 'KeyH':
         if (caps - shift) text += 'H';
         else text += 'h';
         break

      case 'KeyJ':
         if (caps - shift) text += 'J';
         else text += 'j';
         break

      case 'KeyK':
         if (caps - shift) text += 'K';
         else text += 'k';
         break

      case 'KeyL':
         if (caps - shift) text += 'L';
         else text += 'l';
         break

      case 'Semicolon':
         if (shift) text += ':';
         else text += ';';
         break

      case 'Quote':
         if (shift) text += '"';
         else text += `'`;
         break

      case 'Enter':
         text += '\n';
         break

      case 'ShiftLeft':
      case 'ShiftRight':
         shift = 1;
         break

      case 'KeyZ':
         if (caps - shift) text += 'Z';
         else text += 'z';
         break

      case 'KeyX':
         if (caps - shift) text += 'X';
         else text += 'x';
         break

      case 'KeyC':
         if (caps - shift) text += 'C';
         else text += 'c';
         break

      case 'KeyV':
         if (caps - shift) text += 'V';
         else text += 'v';
         break

      case 'KeyB':
         if (caps - shift) text += 'B';
         else text += 'b';
         break

      case 'KeyN':
         if (caps - shift) text += 'N';
         else text += 'n';
         break

      case 'KeyM':
         if (caps - shift) text += 'M';
         else text += 'm';
         break

      case 'Comma':
         if (shift) text += '<';
         else text += ',';
         break

      case 'Period':
         if (shift) text += '>';
         else text += '.';
         break

      case 'Slash':
         if (shift) text += '?';
         else text += '/';
         break

      case 'Space':
         text += ' ';
   }

   document.querySelector('textarea').value = text;

})

window.addEventListener('keyup', function (event) {

   if (arr.includes(event.keyCode)) {
      document.getElementById(event.code).classList.remove('active');
   }
   if (event.key == 'Shift')
      shift = 0;
})