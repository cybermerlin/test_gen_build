var dragBlock;

var build = {
  cons: document.querySelector('.console .content'),
  getting: function() {
    console.log(this.cons.querySelectorAll('.block'))
  }
};
var winGenerate = {
  left: document.querySelector('.navigator .content'),
  right: document.querySelector('.console .content'),
  win: document.getElementById('winGenerate'),
  can: document.querySelector('canvas'),
  caption: null,

  show: function() {
    this.win.style.display = 'block';
    this.caption.focus();
  },

  cancel: function() {
    this.win.style.display = 'none';
  },

  ok: function() {
    var div = document.createElement('DIV');
    div.className = 'block';
    div.innerText = this.caption.value;
    div.setAttribute('data', new Date());
    // div.setAttribute('onclick', 'alert(23)');
    div.setAttribute('draggable', 'true');
    var startStyle = div.style.cssText;
    div.addEventListener('dragstart', function(e) {
      this.style.opacity = '0.4';
      this.style.backgroundColor = 'black';
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      dragBlock = this;
    });
    div.addEventListener('dragend', function(e) {
      this.style.opacity = '1';
      if (e.target.parentNode.parentNode.className == 'navigator') {
        this.style.cssText = startStyle;
      } else {
        this.style.backgroundColor = 'black';
      }
      dragBlock = undefined;
    });
    this.left.appendChild(div);

    this.cancel();
  }
};

winGenerate.caption = winGenerate.win.querySelector('[name="caption"]');

var winInfo = {
  win: document.getElementById('winInfo'),
  content: null,

  show: function(e) {
    this.content.innerText = e.target.getAttribute('data');
    this.win.style.display = 'block';
  },

  hide: function(e) {
    this.win.style.display = 'none';
  }
};
winInfo.content = winInfo.win.querySelector('.winContent');
