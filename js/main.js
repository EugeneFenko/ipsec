//       Eugene Fenko | Copyright 2017

// AutoTyping
var Messenger = function(el) {
  "use strict";
  var m = this;
  var divID = el[0].id;

  m.init = function() {
    m.codeletters = "&#*+%?£@§$fenko";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    if (divID == "lang-uk") {
      m.messages = [
        "Розумне рішення для IPSec VPN",
        "Легке налаштування Cisco IOS!",
        "Розумне рішення для адміністраторів Cisco",
        "Чудовий досвід!"
      ];
    } else if (divID == "lang-ru") {
      m.messages = [
        "Умное решение для IPSec VPN",
        "Легкая настройка Cisco IOS!",
        "Умное решение для админимтраторов Cisco",
        "Отличный опыт!"
      ];
    } else {
      m.messages = [
        "Smart solution for IPSec VPN",
        "Easy to config!",
        "Smart solution for Cisco administrators",
        "Cool experience!"
      ];
    }

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function(length) {
    var random_text = "";
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(
        Math.floor(Math.random() * m.codeletters.length)
      );
    }

    return random_text;
  };

  m.animateIn = function() {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function() {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({
          c: Math.floor(Math.random() * 12) + 1,
          l: m.messages[m.message].charAt(i)
        });
      }
    }

    var do_cycles = false;
    var message = "";

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.cycleText = function() {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html("");

    setTimeout(m.animateIn, 200);
  };

  m.init();
};

console.clear();
var messenger = new Messenger($(".messenger"));

// particle.min.js hosted on GitHub
// Scroll down for initialisation code

!(function(a) {
  var b =
    ("object" == typeof self && self.self === self && self) ||
    ("object" == typeof global && global.global === global && global);
  "function" == typeof define && define.amd
    ? define(["exports"], function(c) {
        b.ParticleNetwork = a(b, c);
      })
    : "object" == typeof module && module.exports
      ? (module.exports = a(b, {}))
      : (b.ParticleNetwork = a(b, {}));
})(function(a, b) {
  var c = function(a) {
    (this.canvas = a.canvas),
      (this.g = a.g),
      (this.particleColor = a.options.particleColor),
      (this.x = Math.random() * this.canvas.width),
      (this.y = Math.random() * this.canvas.height),
      (this.velocity = {
        x: (Math.random() - 0.5) * a.options.velocity,
        y: (Math.random() - 0.5) * a.options.velocity
      });
  };
  return (
    (c.prototype.update = function() {
      (this.x > this.canvas.width + 20 || this.x < -20) &&
        (this.velocity.x = -this.velocity.x),
        (this.y > this.canvas.height + 20 || this.y < -20) &&
          (this.velocity.y = -this.velocity.y),
        (this.x += this.velocity.x),
        (this.y += this.velocity.y);
    }),
    (c.prototype.h = function() {
      this.g.beginPath(),
        (this.g.fillStyle = this.particleColor),
        (this.g.globalAlpha = 0.7),
        this.g.arc(this.x, this.y, 1.5, 0, 2 * Math.PI),
        this.g.fill();
    }),
    (b = function(a, b) {
      (this.i = a),
        (this.i.size = {
          width: this.i.offsetWidth,
          height: this.i.offsetHeight
        }),
        (b = void 0 !== b ? b : {}),
        (this.options = {
          particleColor: void 0 !== b.particleColor ? b.particleColor : "#fff",
          background: void 0 !== b.background ? b.background : "#1a252f",
          interactive: void 0 !== b.interactive ? b.interactive : !0,
          velocity: this.setVelocity(b.speed),
          density: this.j(b.density)
        }),
        this.init();
    }),
    (b.prototype.init = function() {
      if (
        ((this.k = document.createElement("div")),
        this.i.appendChild(this.k),
        this.l(this.k, {
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          "z-index": 1
        }),
        /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))
      )
        this.l(this.k, { background: this.options.background });
      else {
        if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))
          return (
            console.error(
              "Please specify a valid background image or hexadecimal color"
            ),
            !1
          );
        this.l(this.k, {
          background: 'url("' + this.options.background + '") no-repeat center',
          "background-size": "cover"
        });
      }
      if (
        !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor)
      )
        return (
          console.error(
            "Please specify a valid particleColor hexadecimal color"
          ),
          !1
        );
      (this.canvas = document.createElement("canvas")),
        this.i.appendChild(this.canvas),
        (this.g = this.canvas.getContext("2d")),
        (this.canvas.width = this.i.size.width),
        (this.canvas.height = this.i.size.height),
        this.l(this.i, { position: "relative" }),
        this.l(this.canvas, { "z-index": "20", position: "relative" }),
        window.addEventListener(
          "resize",
          function() {
            return this.i.offsetWidth === this.i.size.width &&
              this.i.offsetHeight === this.i.size.height
              ? !1
              : ((this.canvas.width = this.i.size.width = this.i.offsetWidth),
                (this.canvas.height = this.i.size.height = this.i.offsetHeight),
                clearTimeout(this.m),
                void (this.m = setTimeout(
                  function() {
                    this.o = [];
                    for (
                      var a = 0;
                      a <
                      (this.canvas.width * this.canvas.height) /
                        this.options.density;
                      a++
                    )
                      this.o.push(new c(this));
                    this.options.interactive && this.o.push(this.p),
                      requestAnimationFrame(this.update.bind(this));
                  }.bind(this),
                  500
                )));
          }.bind(this)
        ),
        (this.o = []);
      for (
        var a = 0;
        a < (this.canvas.width * this.canvas.height) / this.options.density;
        a++
      )
        this.o.push(new c(this));
      this.options.interactive &&
        ((this.p = new c(this)),
        (this.p.velocity = { x: 0, y: 0 }),
        this.o.push(this.p),
        this.canvas.addEventListener(
          "mousemove",
          function(a) {
            (this.p.x = a.clientX - this.canvas.offsetLeft),
              (this.p.y = a.clientY - this.canvas.offsetTop);
          }.bind(this)
        ),
        this.canvas.addEventListener(
          "mouseup",
          function(a) {
            (this.p.velocity = {
              x: (Math.random() - 0.5) * this.options.velocity,
              y: (Math.random() - 0.5) * this.options.velocity
            }),
              (this.p = new c(this)),
              (this.p.velocity = { x: 0, y: 0 }),
              this.o.push(this.p);
          }.bind(this)
        )),
        requestAnimationFrame(this.update.bind(this));
    }),
    (b.prototype.update = function() {
      this.g.clearRect(0, 0, this.canvas.width, this.canvas.height),
        (this.g.globalAlpha = 1);
      for (var a = 0; a < this.o.length; a++) {
        this.o[a].update(), this.o[a].h();
        for (var b = this.o.length - 1; b > a; b--) {
          var c = Math.sqrt(
            Math.pow(this.o[a].x - this.o[b].x, 2) +
              Math.pow(this.o[a].y - this.o[b].y, 2)
          );
          c > 120 ||
            (this.g.beginPath(),
            (this.g.strokeStyle = this.options.particleColor),
            (this.g.globalAlpha = (120 - c) / 120),
            (this.g.lineWidth = 0.7),
            this.g.moveTo(this.o[a].x, this.o[a].y),
            this.g.lineTo(this.o[b].x, this.o[b].y),
            this.g.stroke());
        }
      }
      0 !== this.options.velocity &&
        requestAnimationFrame(this.update.bind(this));
    }),
    (b.prototype.setVelocity = function(a) {
      return "fast" === a ? 1 : "slow" === a ? 0.33 : "none" === a ? 0 : 0.66;
    }),
    (b.prototype.j = function(a) {
      return "high" === a
        ? 5e3
        : "low" === a
          ? 2e4
          : isNaN(parseInt(a, 10))
            ? 1e4
            : a;
    }),
    (b.prototype.l = function(a, b) {
      for (var c in b) a.style[c] = b[c];
    }),
    b
  );
});

// Initialisation

var canvasDiv = document.getElementById("particle");
var options = {
  particleColor: "#0c0",
  background: "#222",
  interactive: false,
  speed: "low",
  density: "medium"
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);

// Anchor Smooth

$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(
  function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          500
        );
        return false;
      }
    }
  }
);

//////////////////////
//////CONF-GEN////////
//////////////////////

var outputConfig;

(function() {
  function getResult() {
    var dataForm = document.querySelector("#data-form");
    var model = {
      //1phase
      policyNumber: "",
      hash: "",
      encryption: "",
      group: "",
      keyLength: "",
      lifeTime: "",
      nextRouterAddress: "",
      key: "",

      //2phase

      //ACL
      numberAcl: "",
      sourceAddress: "",
      sourceMask: "",
      destAddress: "",
      destMask: "",
      //IPSEC
      transformName: "",
      ipsecMode: "",
      //AH
      hashAH: "",
      //ESP
      encESP: "",
      hashESP: "",
      //CryptoMap
      mapName: "",
      mapNumber: "",
      interfaceName: ""
    };

    var inputs = Array.from(dataForm.elements);
    inputs.forEach(function(input) {
      if (input.value) {
        if (
          input.checked === false &&
          input.type != "text" &&
          input.type != "number" &&
          input.type != "password"
        ) {
          return;
        }
        model[input.name] = input.value;
      }
    });

    if ($("#lengthAes").css("display") == "none") {
      model.keyLength = "";
    }
    if ($("#AH").css("display") == "none") {
      model.hashAH = "";
    }
    if ($("#ESP").css("display") == "none") {
      (model.encESP = ""), (model.hashESP = "");
    }

    outputConfig =
      "crypto isakmp policy " +
      model.policyNumber +
      "\r\n" +
      "authentication pre-share\r\n" +
      "hash " +
      model.hash +
      "\r\n" +
      "encryption " +
      model.encryption +
      " " +
      model.keyLength +
      "\r\n" +
      "group " +
      model.group +
      "\r\n" +
      "lifetime " +
      model.lifeTime +
      "\r\n" +
      "exit\r\n" +
      "crypto isakmp key " +
      model.key +
      " address " +
      model.nextRouterAddress +
      "\r\n\r\n" +
      "crypto ipsec transform-set " +
      model.transformName +
      " " +
      model.hashAH +
      " " +
      model.encESP +
      " " +
      model.hashESP +
      "\r\n" +
      "mode " +
      model.ipsecMode +
      "\r\n" +
      "access-list " +
      model.numberAcl +
      " permit ip " +
      model.sourceAddress +
      " " +
      model.sourceMask +
      " " +
      model.destAddress +
      " " +
      model.destMask +
      "\r\n\r\n" +
      "crypto map " +
      model.mapName +
      " " +
      model.mapNumber +
      " ipsec-isakmp\r\n" +
      "set peer " +
      model.nextRouterAddress +
      "\r\n" +
      "match address " +
      model.numberAcl +
      "\r\n" +
      "set transform-set " +
      model.transformName +
      "\r\nexit\r\n\r\n" +
      "interface " +
      model.interfaceName +
      "\r\n" +
      "crypto map " +
      model.mapName +
      "\r\n";

    var resultContainer = document.querySelector("#result-output");
    resultContainer.textContent = outputConfig;

    qrcode.makeCode(outputConfig);
  }

  function togleLengthAes() {
    if (this.value == "aes") {
      $("#lengthAes").show(1000);
    } else {
      $("#lengthAes").hide(1000);
    }
  }

  function openNextPhase() {
    $("#phase2").show(1000);
    $("#show-1phase-btn").show(100);
    $("#phase1").hide(1000);
  }

  function showOnePhase() {
    $("#phase2").hide(1000);
    $("#show-1phase-btn").hide(100);
    $("#phase1").show(1000);
  }

  function ipsecMode() {
    if (this.id == "ahBtn") {
      $("#AH").show(1000);
      $("#ESP").hide(1000);
    } else if (this.id == "espBtn") {
      $("#ESP").show(1000);
      $("#AH").hide(1000);
    } else {
      $("#ESP").show(1000);
      $("#AH").show(1000);
    }
  }

  function showResBlock() {
    $(".result-block").show(1000);
  }

  function expMode() {
    if ($("#expI_O").prop("checked")) {
      $(".forInfo").css("pointerEvents", "none");
    } else {
      $(".forInfo").css("pointerEvents", "all");
    }
  }

  //AES_BIT_show/hide
  $("#p1-aes").click(togleLengthAes);
  $("#p1-des").click(togleLengthAes);
  $("#p1-3des").click(togleLengthAes);
  //IPSec_mode
  $("#ahBtn").click(ipsecMode);
  $("#espBtn").click(ipsecMode);
  $("#ahEspBtn").click(ipsecMode);
  //Phase_show/hide
  $("#next-phase-btn").click(openNextPhase);
  $("#show-1phase-btn").click(showOnePhase);
  //GET_result
  $("#result-btn").click(getResult);
  $("#result-btn").click(showResBlock);
  //OffHelp_(ExpertMode)
  $("#expI_O").click(expMode);
})();

////SAVE_FILE////
function saveTextAsFile() {
  //var textToWrite = document.getElementById('result-output').textContent;
  var textFileAsBlob = new Blob([outputConfig], { type: "text/plain" });
  var fileNameToSaveAs = "config.txt";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.URL != null) {
    // Chrome allows the link to be clicked without actually adding it to the DOM.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

var button = document.getElementById("downBtn");
button.addEventListener("click", saveTextAsFile);

function destroyClickedElement(event) {
  // remove the link from the DOM
  document.body.removeChild(event.target);
}

///QR_code
var qrcode = new QRCode("qr", {
  text: "Eugene Fenko\neugenefenko.github.io",
  colorDark: "#333",
  colorLight: "#fff",
  correctLevel: QRCode.CorrectLevel.H
});
