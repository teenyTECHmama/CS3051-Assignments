let t = document.createElement("title");
document.head.appendChild(t);
t.innerHTML="About Me"

let s = document.createElement("style");
document.head.appendChild(s);

let d = document.createElement("div");
document.body.appendChild(d);
d.style = "background: rgba(0, 128, 0, 0.3)";

let dd = document.createElement("div");
document.body.appendChild(dd);
dd.style = "background: rgba(0, 128, 0, 0.3)";

let dd3 = document.createElement("div");
document.body.appendChild(dd3);
dd3.style = "background: rgba(0, 128, 0, 0.3)";

s.innerHTML = ' h1 {border: 2px solid black;outline: #4CAF50 solid 10px;margin: auto; padding: 20px;background-color: #4CAF50;}            div {border: 2px solid black;outline: #4CAF50 solid 10px;margin: auto;padding: 20px;}';


let n = document.createElement("h1");
d.appendChild(n);
n.innerHTML="Maya Sankoh";

let c = document.createElement("h2");
d.appendChild(c);
c.innerHTML="I am from San Diego, CA, USA ";

let h = document.createElement("h3");
d.appendChild(h);
h.innerHTML=" I like making art, cooking, playing video games, and learning new things.";

let img = document.createElement("img");
d.appendChild(img);
img.src = "images/AboutMeJS.png";
img.style = "border: 2px solid black";
img.width = "400";
img.height = "500";
img.alt= "Photo of a woman with sunglasses";

let p = document.createElement("p");
dd.appendChild(p);
p.innerHTML ="Sites I like:";

let u = document.createElement("ul");
dd.appendChild(u);

let l = document.createElement("li");
u.appendChild(l);

let an = document.createElement("a");
l.appendChild(an);
an.href="https://www.happycow.net/";
an.target = "_blank";
an.textContent = "Happy Cow";

let ld = document.createElement("li");
u.appendChild(ld);

let ann = document.createElement("a");
ld.appendChild(ann);
ann.href= "https://voiranime.com/";
ann.target = "_blank";
ann.textContent = "Anime Shows";

let lt = document.createElement("li");
u.appendChild(lt);

let ant = document.createElement("a");
lt.appendChild(ant);
ant.href="https://www.geeksforgeeks.org/";
ant.target = "_blank";
ant.textContent = "Geeks4Geeks";

let tab = document.createElement("table");
dd3.appendChild(tab);

let cap = document.createElement("caption");
tab.appendChild(cap);
cap.textContent ="Senior Project Progress Report:";

let trow = document.createElement("tr");
tab.appendChild(trow);

let thd = document.createElement("th")
trow.appendChild(thd);
thd.style = "border: 2px solid black";
thd.textContent = "Project Build";

let thdd = document.createElement("th");
trow.appendChild(thdd);
thdd.style = "border: 2px solid black";
thdd.textContent = "Start date";

let thh = document.createElement("th");
trow.appendChild(thh);
thh.style = "border: 2px solid black";
thh.textContent = "Completion";

let trow1 = document.createElement("tr");
tab.appendChild(trow1);

let td = document.createElement("td");
trow1.appendChild(td)
td.style = "border: 2px solid black";
td.textContent = "Clock Module";

let tdd = document.createElement("td");
trow1.appendChild(tdd);
tdd.style = "border: 2px solid black";
tdd.textContent = "March 2022";

let ttd = document.createElement("td");
trow1.appendChild(ttd);
ttd.style = "border: 2px solid black";
ttd.textContent = "April 2022";

let trow2 = document.createElement("tr");
tab.appendChild(trow2);


let tt = document.createElement("td");
trow2.appendChild(tt);
tt.style = "border: 2px solid black";
tt.textContent = "A, B, & Instruction registers";

let dt = document.createElement("td");
trow2.appendChild(dt);
dt.style = "border: 2px solid black";
dt.textContent = "April 2022";

let dd2 = document.createElement("td");
trow2.appendChild(dd2);
dd2.style = "border: 2px solid black";
dd2.textContent = "April 2022";

let trow3 = document.createElement("tr");
tab.appendChild(trow3);

let tdt  = document.createElement("td");
trow3.appendChild(tdt);
tdt.style = "border: 2px solid black";
tdt.textContent = "Arithmetic & Logic Unit";

let tdb  = document.createElement("td");
trow3.appendChild(tdb);
tdb.style = "border: 2px solid black";
tdb.textContent= "April 2022";

let tbd  = document.createElement("td");
trow3.appendChild(tbd);
tbd.style = "border: 2px solid black";
tbd.textContent ="TBD";




let trow4 = document.createElement("tr");
tab.appendChild(trow4);

let bt = document.createElement("td");
trow4.appendChild(bt);
bt.style = "border: 2px solid black";
bt.textContent ="Random Access Memory";

let tb = document.createElement("td");
trow4.appendChild(tb);
tb.style = "border: 2px solid black";
tb.textContent="April 2022";

let bb = document.createElement("td");
trow4.appendChild(bb);
bb.style = "border: 2px solid black";
bb.textContent="May 2022";

let trow5 = document.createElement("tr");
tab.appendChild(trow5);


let tc = document.createElement("td");
trow5.appendChild(tc);
tc.style = "border: 2px solid black";
tc.textContent="Program Counter";

let ct = document.createElement("td");
trow5.appendChild(ct);
ct.style = "border: 2px solid black";
ct.textContent="May 2022";

let cc = document.createElement("td");
trow5.appendChild(cc);
cc.style = "border: 2px solid black";
cc.textContent="May 2022";

let trow6 = document.createElement("tr");
tab.appendChild(trow6);

let dtt = document.createElement("td");
trow6.appendChild(dtt);
dtt.style = "border: 2px solid black";
dtt.textContent="Output & Control Logic";

let tdr = document.createElement("td");
trow6.appendChild(tdr);
tdr.style = "border: 2px solid black";
tdr.textContent="May 2022";

let rdt = document.createElement("td");
trow6.appendChild(rdt);
rdt.style = "border: 2px solid black";
rdt.textContent="TBD";