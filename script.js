let currentSpeed = 1;

function callVideoFunction(functionId, otherVariable) {
    var video = document.getElementById('videoPlayer');
    var videoU = document.getElementById('videoUpload');
    switch (functionId) {
        case 0:
            var link = document.createElement('a');
            link.href = video.src;
            link.download = 'Ambysoft-' + videoU.files[0].name;
            link.click();
            break;
        case 1:
            video.playbackRate = otherVariable;
            currentSpeed = otherVariable;
            break;
        case 2:
            video.play();
            break;
        case 3:
            video.pause();
            break;
        default:
            break;
    }
}
function callAudioFunction(functionId, otherVariable) {
    var audio = document.getElementById('audioPlayer');
    var audioU = document.getElementById('audioUpload');
    switch (functionId) {
        case 0:
            var link = document.createElement('a');
            link.href = audio.src;
            link.download = 'Ambysoft-' + audioU.files[0].name;
            link.click();
            break;
        case 1:
            audio.playbackRate = otherVariable;
            currentSpeed = otherVariable;
        case 2:
            audio.play();
            break;
        case 3:
            audio.pause();
            break;
        default:
            break;
    }
}
function callTextFunction(functionId, otherVariable) {
    var text = document.getElementById('textInput');
    var textU = document.getElementById('textUpload');
    switch (functionId) {
        case 0:
            var link = document.createElement('a');
            var content = text.value;
            var blob = new Blob([content], { type: 'text/plain' });
            link.href = URL.createObjectURL(blob);
            link.download = 'Ambysoft-' + textU.files[0].name;
            link.click();
            break;
        default:
            break;
    }
}
function fullscreenGame(link) {
    let newTab = window.open("about:blank", "_blank");
    if (newTab) {
        setTimeout(() => {
            newTab.document.write(`
            <head>
                <style>
                body {
                    background-color: black;
                    width: 100%;
                    height: 100%;
                    margin: 0px;
                    padding: 0px;
                }
                </style>
            </head>
            <body>
                <iframe style="width: 99%; height: 99%;" src="${link}"></iframe>
            </body>
            `);
            newTab.document.close();
        }, 10);
    }
}
function changeGame(gameName) {
    let gameCode = "";
    let currentLink = "";
    let currentSourceLink = "https://html5.gamedistribution.com";
    let currentSourceText = "gamedistribution.com";
    switch (gameName) {
        case "Snake":
            currentLink = "https://unblocked-games.org/games/snake-io/";
            currentLink = "Games/Snake.io.html";
            currentSourceLink = "https://unblocked-games.org";
            currentSourceText = "unblocked-games.org";
            break;
        case "ShortLife":
            currentLink = "https://html5.gamedistribution.com/030eb2f7b22246b3bbffd69b918e2a11/?gd_sdk_referrer_url=https://gamedistribution.com/games/short-life/";
            currentLink = "Games/ShortLife.html";
            break;
        case "DrunkMan3D":
            currentLink = "https://html5.gamedistribution.com/f5227a5977c84a1d819702f88688ed80/?gd_sdk_referrer_url=https://gamedistribution.com/games/drunk-man-3d/";
            currentLink = "Games/DrunkMan3D.html";
            break;
        case "GetACoolGun":
            currentLink = "https://html5.gamedistribution.com/f9320b27ae2d450fba45cfbe99ddd27a/?gd_sdk_referrer_url=https://gamedistribution.com/games/get-a-cool-gun!/";
            currentLink = "Games/GetACoolGun.html";
            break;
        case "GunRush":
            currentLink = "https://html5.gamedistribution.com/e0ee0fc8416845b992af13f0bc74375d/?gd_sdk_referrer_url=https://gamedistribution.com/games/gun-rush-1/";
            currentLink = "Games/GunRush.html";
            break;
        case "SquidGameButBlockworld":
            currentLink = "https://html5.gamedistribution.com/cdef60f561614a7991fa5b0b3515ed85/?gd_sdk_referrer_url=https://gamedistribution.com/games/squid-escape-but-blockworld/";
            currentLink = "Games/SquidGameButBlockworld.html";
            break;
        case "ColorRaceObby":
            currentLink = "https://html5.gamedistribution.com/7503d2eb0f044c0ba76a6360230c32bb/?gd_sdk_referrer_url=https://gamedistribution.com/games/color-race-obby/";
            currentLink = "Games/ColorRaceObby.html";
            break;
        case "Qube2048":
            currentLink = "https://html5.gamedistribution.com/588cfae14b0748628b75e0fe3d86a1fb/?gd_sdk_referrer_url=https://gamedistribution.com/games/qube-2048/";
            currentLink = "Games/Qube2048.html";
            break;
        case "GeometryStars":
            currentLink = "https://html5.gamedistribution.com/15e7309e294e4f78943d9e39fc0a0d85/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-stars/";
            currentLink = "Games/GeometryStars.html";
            break;
        case "NumberDomination":
            currentLink = "https://html5.gamedistribution.com/0a8abcb4fd9442e99827c02a72dd9f12/?gd_sdk_referrer_url=https://gamedistribution.com/games/number-domination/";
            currentLink = "Games/NumberDomination.html";
            break;
        case "EvolutionOfTrust":
            currentLink = "https://ncase.me/trust/"
            currentLink = "Games/EvolutionOfTrust.html";
            currentSourceLink = "https://ncase.me/"
            currentSourceText = "ncase.me"
            break;
        case "RunSausageRun":
            currentLink = "https://h5.4j.com/games/Run-Sausage-Run/index.html"
            currentLink = "Games/RunSuasageRun.html";
            currentSourceLink = "https://www.4j.com/"
            currentSourceText = "4j.com"
            break;
        case "DrawBridges":
            currentLink = "https://games.crazygames.com/en_US/draw-bridges/index.html";
            currentLink = "Games/DrawBridges.html";
            currentSourceLink = "https://crazygames.com";
            currentSourceText = "crazygames.com";
        default:
            break;
    }
    gameCode = `
        <iframe src="${currentLink}" width="100%" height="100%" style="background-color: #73d773; border: none;"></iframe>
        <button onclick="fullscreenGame('${currentLink}')">Fullscreen</button>
        Original From: <a href="${currentSourceLink}" target="_blank">${currentSourceText}</a>
    `;
    document.getElementById('main').innerHTML = gameCode;
}

function changePage(pageId) {
    let pageCode = ``;
    switch (pageId) {
        case 0:
            pageCode = `
            <div style="display: flex; justify-content: center; align-items: center; font-size: 50px;">
                Ambysoft
            </div>
            <div style="display: flex; justify-content: center; align-items: center; font-size: 10px;">
                Home to the greatest tools and games on the internet.
            </div>
            <div style="width: 80vw; margin: auto; text-align: center; font-size: 20px; margin-top: 5vh;">
                At Ambysoft, we deliver cutting-edge tools and next-level gaming experiences designed to push the 
                limits of creativity and entertainment. From powerful editing software to immersive, high-quality 
                games, we strive to provide the best digital solutions on the internet. Elevate your workflow, 
                enhance your gameplay, and explore the future of innovation all in one place.
            </div>
            <img href="http://app.temu.com/m/mu2ag8hu0w1" src="">
            `;
            break;
        case 1:
            pageCode = `
            <input onchange="changeFunction(0)" type="file" id="videoUpload" accept="video/*"></br>
            <video style="width: 50vw; height: 50vh;" id="videoPlayer" controls></video>

            <div id="progressContainer" style="width: 50vw; height: 10px; background: #ccc; position: relative; cursor: pointer; bottom: 15px;">
                <div id="progressBar" style="width: 0%; height: 100%; background: #f00;"></div>
            </div>

            <div class="editing-tools">
                <button onclick="callVideoFunction(2)">Play</button>
                <button onclick="callVideoFunction(3)">Pause</button>
                <button onclick="callVideoFunction(0)" id="downloadVBtn">Download Video</button>
                <button onclick="callVideoFunction(1, 0.5)">0.5x Speed</button>
                <button onclick="callVideoFunction(1, 1)">1x Speed</button>
                <button onclick="callVideoFunction(1, 2)">2x Speed</button>
            </div>
            `;
            break;
        case 2:
            pageCode = `
            <input onchange="changeFunction(1)" type="file" id="audioUpload" accept="audio/*"></br>
            <audio style="width: 50vw; height: 50px;" id="audioPlayer" controls></audio>

            <div id="progressContainer" style="width: 50vw; height: 10px; background: #ccc; position: relative; cursor: pointer; bottom: 15px;">
                <div id="progressBar" style="width: 0%; height: 100%; background: #f00;"></div>
            </div>

            <div class="editing-tools">
                <button onclick="callAudioFunction(2)">Play</button>
                <button onclick="callAudioFunction(3)">Pause</button>
                <button onclick="callAudioFunction(0)" id="downloadABtn">Download Audio</button>
                <button onclick="callAudioFunction(1, 0.5)">0.5x Speed</button>
                <button onclick="callAudioFunction(1, 1)">1x Speed</button>
                <button onclick="callAudioFunction(1, 2)">2x Speed</button>
            </div>
            `;
            break;
        case 3:
            pageCode = `
            <input onchange="changeFunction(2)" type="file" id="textUpload" accept="text/*"></br>

            <textarea id="textInput" placeholder="Enter text here"></textarea>

            <div class="editing-tools">
                <button onclick="callTextFunction(0)" id="downloadTBtn">Save Text</button>
            </div>
            `;
            break;
        case 4:
            pageCode = `
            
            `;
            break;
        case 5:
            fetch("https://raw.githubusercontent.com/TheGorillaModder/Ambysoft/refs/heads/main/games.txt")
                .then(response => response.text())
                .then(data => {
                    document.getElementById('main').innerHTML = data;
                })
            break;
        default:
            break;
    }
    if (pageCode != ``) {
        document.getElementById('main').innerHTML = pageCode;
    }
}
changePage(0);
function changeFunction(functionId) {
    const progressContainer = document.getElementById("progressContainer");
    const progressBar = document.getElementById("progressBar");
    switch (functionId) {
        case 0:
            let videoSrc = document.getElementById('videoUpload');
            let video = document.getElementById("videoPlayer");
            if (videoSrc.files.length > 0) {
                document.getElementById('videoPlayer').src = URL.createObjectURL(videoSrc.files[0]);
            }
            video.addEventListener("timeupdate", () => {
                const progress = (video.currentTime / video.duration) * 100;
                progressBar.style.width = progress + "%";
            });
            progressContainer.addEventListener("click", (event) => {
                const rect = progressContainer.getBoundingClientRect();
                const clickX = event.clientX - rect.left;
                const newTime = (clickX / rect.width) * video.duration;
                video.currentTime = newTime;
            });
            break;
        case 1:
            let audioSrc = document.getElementById('audioUpload');
            let audio = document.getElementById("audioPlayer");
            if (audioSrc.files.length > 0) {
                document.getElementById('audioPlayer').src = URL.createObjectURL(audioSrc.files[0]);
            }
            audio.addEventListener("timeupdate", () => {
                const progress = (audio.currentTime / audio.duration) * 100;
                progressBar.style.width = progress + "%";
            });
            progressContainer.addEventListener("click", (event) => {
                const rect = progressContainer.getBoundingClientRect();
                const clickX = event.clientX - rect.left;
                const newTime = (clickX / rect.width) * audio.duration;
                audio.currentTime = newTime;
            });
            break;
        case 2:
            let textSrc = document.getElementById('textUpload');
            if (textSrc.files.length > 0) {
                let reader = new FileReader();
                reader.onload = function (event) {
                    document.getElementById('textInput').value = event.target.result;
                };
                reader.readAsText(textSrc.files[0]);
            }
            break;
        default:
            break;
    }
}
