	var body=document.getElementById("root");
	
	var h1=document.createElement("h1");
	h1.textContent="Resume";
	body.appendChild(h1);

	var main=document.createElement("section");
	main.classList.add("main");
	body.appendChild(main);

	var leftSide=document.createElement("article");
	leftSide.classList.add("leftSide");
	main.appendChild(leftSide);

	var image=document.createElement("section");
	image.classList.add("image");
	leftSide.appendChild(image);

	var img=document.createElement("img");
	img.src="image/avatar.svg";
	img.alt="Dr. T. K. Rao profile";
	image.appendChild(img);

	leftSide.appendChild(document.createElement("hr"));

	var profile=document.createElement("section");
	profile.classList.add("profile");
	leftSide.appendChild(profile);

	var name1=document.createElement("h2");
	name1.textContent="Dr. T. Kameswara Rao";
	profile.appendChild(name1);

	var phone=document.createElement("h4");
	phone.textContent="+91 9704 256 258";
	profile.appendChild(phone);

	var email=document.createElement("h4");
	email.textContent="tkrphd@gmail.com";
	profile.appendChild(email);


	var address=document.createElement("section");
	address.classList.add("address");
	leftSide.appendChild(address);

	var gname1=document.createElement("p");
	gname1.textContent="Dr. T. K. Rao";
	address.appendChild(gname1);

	var flat=document.createElement("p");
	flat.textContent="F. No: 402, B Block";
	address.appendChild(flat);

	var street=document.createElement("p");
	street.textContent="Brindavan Apartment";
	address.appendChild(street);

	var city=document.createElement("p");
	city.textContent="Tenali";
	address.appendChild(city);

	var district=document.createElement("p");
	district.textContent="Guntur-522201";
	address.appendChild(district);

	var rightSide=document.createElement("article");
	rightSide.classList.add("rightSide");
	main.appendChild(rightSide);

	var co=document.createElement("section");
	co.classList.add("co");
	rightSide.appendChild(co);

	var coj=document.createElement("h3");
	coj.textContent="Career Objective:";
	co.appendChild(coj);

	var obj=document.createElement("h4");
	obj.textContent="-To Work upto best of my talent in the organization and prove myself as a professional and permit scope for advancement";
	co.appendChild(obj);

	rightSide.appendChild(document.createElement("hr"));

	var ed=document.createElement("section");
	ed.classList.add("ed");
	rightSide.appendChild(ed);

	var ed1=document.createElement("h3");
	ed1.textContent="Education:";
	ed.appendChild(ed1);

	var u=document.createElement("ul");
	u.classList.add("u");
	ed.appendChild(u);

	var i1=document.createElement("li");
	i1.textContent="Completed PhD from SVU in 2017";
	u.appendChild(i1);

	var i2=document.createElement("li");
	i2.textContent="Completed M.E from Satyabama University in 2007";
	u.appendChild(i2);

	var i3=document.createElement("li");
	i3.textContent="Completed MCA from SVU in 2005";
	u.appendChild(i3);

	rightSide.appendChild(document.createElement("hr"));

	var we=document.createElement("section");
	we.classList.add("we");
	rightSide.appendChild(we);

	var we1=document.createElement("h3");
	we1.textContent="Work Experience:";
	we.appendChild(we1);

	var u=document.createElement("ul");
	u.classList.add("u");
	we.appendChild(u);

	var l1=document.createElement("li");
	l1.textContent="2017- tilldate: working as an Professor in VVIT, Namburu";
	u.appendChild(l1);

	var l2=document.createElement("li");
	l2.textContent="2014-2017: worked as a Assoc.Prof in CEC, Chirala";
	u.appendChild(l2);

	var l3=document.createElement("li");
	l3.textContent="2007-2014: worked as a Assoc.Prof in PBRVITS, Kavali";
	u.appendChild(l3);

	var l4=document.createElement("li");
	l4.textContent="2006-2007: worked as a Asst.Prof in MLEC, Singarayakonda";
	u.appendChild(l4);

	rightSide.appendChild(document.createElement("hr"));


	var st=document.createElement("section");
	st.classList.add("st");
	rightSide.appendChild(st);

	var st1=document.createElement("h3");
	st1.textContent="Subjects Taught:";
	st.appendChild(st1);

	var u1=document.createElement("ul");
	u1.classList.add("u1");
	st.appendChild(u1);

	var l11=document.createElement("li");
	l11.textContent="ARTIFICIAL INTELLIGENCE";
	u1.appendChild(l11);

	var l22=document.createElement("li");
	l22.textContent="WEB TECHNOLOGIES";
	u1.appendChild(l22);

	var l33=document.createElement("li");
	l33.textContent=" STM, SE";
	u1.appendChild(l33);

	rightSide.appendChild(document.createElement("hr"));

	var p=document.createElement("section");
	p.classList.add("p");
	rightSide.appendChild(p);

	var p1=document.createElement("h3");
	p1.textContent="Publications:";
	p.appendChild(p1);

	var u11=document.createElement("ul");
	u11.classList.add("u11");
	p.appendChild(u11);

	var l111=document.createElement("li");
	l111.textContent="Journals:8";
	u11.appendChild(l111);

	var l222=document.createElement("li");
	l222.textContent="Conferences:5";
	u11.appendChild(l222);