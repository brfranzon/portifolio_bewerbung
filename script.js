onload = function () {
    execute();
}
/*new*/
let changeBtn = document.getElementById("x");
changeBtn.onclick = execute;

function execute() {

    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    width = canvas.width = window.innerWidth * 0.48;
    height = canvas.height = window.innerHeight * 0.50;


    var p0 = {
        x: width / 2,
        y: height
    },
        p0_1 = {
            x: width / 8,
            y: height/2
        },
        p0_2 = {
            x: 3 * width / 4,
            y: 2 * height / 3
        },


        p1 = {
            x: width / 2,
            y: 0
        },

        p1_1 = {
            x: width / 8,
            y: 0
        },
        p1_2 = {
            x: 3 * width / 4,
            y: 0
        },
        trunkRatio = 0.4;
    //brachAngle = Math.PI / 6;

    function changeAngle() {
        return brachAngle = Math.random(-Math.PI / 2, Math.PI / 2);
    }

    tree(p0, p1, 8);
    tree(p0_1, p1_1, 8);
    tree(p0_2, p1_2, 8);

    function tree(p0, p1, limit) {


        var dx = p1.x - p0.x,
            dy = p1.y - p0.y,
            dist = Math.sqrt(dx * dx + dy * dy),
            angle = Math.atan2(dy, dx),
            branchLength = dist * (1 - trunkRatio),

            pA = {
                x: p0.x + dx * trunkRatio,
                y: p0.y + dy * trunkRatio
            },

            pB = {
                x: pA.x + Math.cos(angle + changeAngle()) * branchLength,
                y: pA.y + Math.sin(angle + changeAngle()) * branchLength
            },

            pC = {
                x: pA.x + Math.cos(angle - changeAngle()) * branchLength,
                y: pA.y + Math.sin(angle - changeAngle()) * branchLength

            }

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(pA.x, pA.y);
        ctx.stroke();

        if (limit > 0) {
            let interval = setInterval(() => {
                tree(pA, pC, limit - 1);
                tree(pA, pB, limit - 1);
            }, 2000);

            setTimeout(() => {
                clearInterval(interval);
            }, 2000);



        } else {
            ctx.beginPath();
            ctx.setLineDash([5, 3])
            ctx.moveTo(pB.x, pB.y);
            ctx.lineTo(pA.x, pA.y);
            ctx.lineTo(pC.x + 10, pC.y + 10)
            ctx.strokeStyle = "green";
            ctx.stroke();

        }


    }
}
//}





