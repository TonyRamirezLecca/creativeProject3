let app = new Vue({
    el: "#root",
    data: {
	menuText: "Edit",
	customize: false,
	title: "Customize Your Website",
	subtitle: "yeah, this can be yours",
	aboutTitle: "About Me",
	aboutText: "I am a student at BYU and I use vim. Sick.",
	contactTitle: "Contact me so we can play some league",
	contactText: "Here are a few of my links",
	linkTitle: "",
	href: "",
	links: [{
	    title: "Github link",
	    link: "https://github.com/TonyRamirezLecca", 
	}],
    },
    methods: {
	toggleMenu() {
	    if (!this.customize){ 
		this.customize= true;
		this.menuText = "Save";
	    }
	    else {
		this.customize= false;
		this.menuText = "Edit";
	    }
	},
	addItem() {
	    this.links.push({title: this.linkTitle, link: this.href});
	    this.linkTitle = "";
	    this.href = "";
	}
    }

})
