Feature: Import Survey data via spreadsheets
    As an admin I want to be able to import the various survey, and location
    data via uploading one or more spreadsheets.

    Scenario: Import survey data
    	When I import the following spreadsheet:
	      ---
      	 "Team", "Description"
      	 "Survey Leaders", "Leads a group of participants in a survey"
      	 "Organisers", "Part of team that organises BioBlitz event"
      	 "Volunteers", "General volunteer"
        ---

    	And I import the following spreadsheet:
	      ---
      	 "Role", "Description"
      	 "Survey Leader", "Leads survey"
      	 "Survey Co-lead", "2nd survey leader"
      	 "First Aid Officer", "meets criteria for first aid"
	       "Driver", "Drives a transport vehicle"
	       "Kitchen Help", "Helps in the kitchen"
         "Medical Officer", "Does medical stuff"
         "Volunteer", "General busy body"
         "General participant", "Not volunteering"
        ---

      And I import the following spreadsheet:
        ---
      	 "Person:FirstName", "LastName", "Teams", "Capable Roles"
      	 "Michael", "Sharman", "Organiser", "Volunteer, Kitchen Hand"
         "Dan", "Panek", "Organiser", "Volunteer, Kitchen Hand, Bio Security"
         "Nicole", "Anderson", "Organiser", "Medical Officer, Kitchen Hand, Bio Security"
         "Craig", "Broadfield", "Survey Leaders", "Survey Leader"
         "Nick", "Fitzgerald", "Survey Leaders", "Survey Leader"
         "Clare", "Hawkins", "Survey Leaders", "Survey Leader"
         "Frank", "McDermott", "Survey Leaders", "Survey Leader"
         "Michael", "Jackson", "Survey Leaders", "Survey Leader"
         "Ayton", "Senna", "Survey Leaders", "Survey Leader"
         "Phillip", "Adams", "Survey Leaders", "Survey Leader"
         "Greg", "Pitt", "Survey Leaders", "Survey Leader"
         "Chris", "Carr", "Survey Leaders", "Survey Leader"
         "Daniel", "Panek", "Survey Leaders", "Survey Leader"
         "Melanie", "Faheedquar", "Survey Leaders", "Survey Leader"
         "Nathalie", "Imbruglia", "Survey Leaders", "Survey Leader"
         "Frank", "Knight", "Survey Leaders", "Survey Leader"
         "Adam", "Bennett", "Survey Leaders", "Survey Leader"
         "Sam", "McIntosh", "Survey Leaders", "Survey Leader"
         "Rob", "Pergl", "Survey Leaders", "Survey Leader"
         "Yolanda", "Hanusch", "Survey Leaders", "Survey Leader"
         "Jasmine", "Wills", "Survey Leaders", "Survey Leader"
         "Francis", "McDermott", "Survey Leaders", "Survey Leader"
         "Gaby", "Jung", "Survey Leaders", "Survey Leader"
         "Emily", "Wilcox", "Survey Leaders", "Survey Leader"
         "Samantha", "Mannes", "Survey Leaders", "Survey Leader"
         "Todd", "Walsh", "Survey Leaders", "Survey Leader"
         "Rohan", "Amazadeen", "Survey Leaders", "Survey Leader"
         "Jenny", "Webber", "Survey Leaders", "Survey Leader"
         "Jean", "Jeanerette", "Survey Leaders", "Survey Leader"
         "Gregory", "Intox", "Survey Leaders", "Survey Leader"
         "Samuel", "Beckett", "Survey Leaders", "Survey Leader"
         "Richard", "Desiree", "Survey Leaders", "Survey Leader"
         "Peter", "Gell", "Survey Leaders", "Survey Leader"
         "Michelle", "Faheed", "Survey Leaders", "Survey Leader"
         "Richard", "Newport", "Survey Leaders", "Survey Leader"
         "Emma", "Wasson", "Survey Leaders", "Survey Leader"
         "Tim", "Amazadeen", "Survey Leaders", "Survey Leader"
        ---

    	And I import the following spreadsheet:
        ---
      	 "Survey", "Description"
      	 "Birds with Nick Fitzgerald", "Survey 1 description"
         "Plants with Greg Pitt", "Survey 2 description"
         "Slimemoulds with Rob Pergl", "Survey 3 description"
         "Freshwater Invertebrates with Todd Walsh", "Survey 4 description"
         "Mosses and Lichens with Peter Gell", "Survey 5 description"
         "Orchids with Richard Newport", "Survey 6 description"
         "Fungi with Nick Fitzgerald", "Survey 7 description"
         "Insects with Greg Pitt", "Survey 8 description"
         "Birds and Mammals with Rob Pergl", "Survey 9 description"
         "Orchids & Frogs with Todd Walsh", "Survey 10 description"
         "Invertebrates with Peter Gell", "Survey 11 description"
         "Bryophytes with Richard Newport", "Survey 12 description"
         "Macro Photography Workshop with Nick Fitzgerald", "Survey 13 description"
         "Freshwater Crayfish with Greg Pitt", "Survey 14 description"
         "Mammals, Spotlighting and Frogs with Rob Pergl", "Survey 15 description"
         "Mammals, Scats & Traces & Pack down cameras with Todd Walsh", "Survey 16 description"
         "Art Installation with Peter Gell", "Survey 17 description"
         "Diatom algae with Richard Newport", "Survey 18 description"
         "Waterbugs with Rob Pergl", "Survey 19 description"
        ---

    	And I import the following spreadsheet:
        ---
      	 "Timeslot", "Start", "Duration"
         "Friday AM", "2017-10-07T09:00:00Z", "180"
      	 "Friday PM", "2017-11-24T13:00:00Z", "240"
         "Friday NIGHT", "2017-11-24T19:00:00Z", "180"
         "Saturday DAWN", "2017-11-25T06:00:00Z", "240"
         "Saturday AM", "2017-11-25T09:00:00Z", "240"
         "Saturday PM", "2017-11-25T13:00:00Z", "180"
         "Saturday NIGHT", "2017-11-25T19:00:00Z", "240"
      	 "Sunday DAWN", "2017-11-26T06:00:00Z", "240"
         "Sunday AM", "2017-11-26T09:00:00Z", "240"
         "Sunday PM", "2017-11-26T13:00:00Z", "240"
        ---

      And I import the following spreadsheet:
        ---
      	 "Location", "Description"
         "Forest", "The forest survey site"
      	 "Plains",  "The plains survey site"
      	 "Coast",   "The coast survey site"
         "Tarkine Wilderness Lodge", "The Tarkine Wilderness Lodge site"
        ---

      And I import the following spreadsheet:
        ---
      	 "Surveyslot:Survey:name", "Surveyslot:Timeslot:name", "Surveyslot:Location:name", "NumberOfParticipants"
         Birds with Nick Fitzgerald,Friday AM,Tarkine Wilderness Lodge,16
         Plants with Greg Pitt,Friday AM,Forest,12
         Slimemoulds with Rob Pergl,Friday AM,Plains,12
         Freshwater Invertebrates with Todd Walsh,Friday PM,Coast,12
         Mosses and Lichens with Peter Gell,Friday PM,Tarkine Wilderness Lodge,16
         Orchids with Richard Newport,Friday PM,Plains,12
         Fungi with Nick Fitzgerald,Friday NIGHT,Coast,12
         Insects with Greg Pitt,Friday NIGHT,Forest,12
         Birds and Mammals with Rob Pergl,Saturday DAWN,Plains,8
         Orchids & Frogs with Todd Walsh,Saturday DAWN,Coast,8
         Invertebrates with Peter Gell,Saturday AM,Forest,12
         Bryophytes with Richard Newport,Saturday AM,Plains,12
         Macro Photography Workshop with Nick Fitzgerald,Saturday AM,Plains,12
         Freshwater Crayfish with Greg Pitt,Saturday AM,Coast,12
         "Mammals, Spotlighting and Frogs with Rob Pergl",Saturday AM,Coast,8
         "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Saturday PM,Forest,12
         Art Installation with Peter Gell,Saturday PM,Plains,8
         Diatom algae with Richard Newport,Saturday PM,Coast,12
         Waterbugs with Rob Pergl,Saturday PM,Forest,12
         Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,12
         Orchids & Frogs with Todd Walsh,Saturday NIGHT,Coast,8
         Invertebrates with Peter Gell,Sunday DAWN,Plains,8
         Bryophytes with Richard Newport,Sunday AM,Coast,12
         Macro Photography Workshop with Nick Fitzgerald,Sunday AM,Forest,8
         Freshwater Crayfish with Greg Pitt,Sunday AM,Coast,12
         "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday AM,Forest,12
         "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Sunday PM,Plains,8
         Art Installation with Peter Gell,Sunday PM,Coast,8
         Diatom algae with Richard Newport,Sunday PM,Forest,12
         "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday PM,Plains,12
        ---

    	And I import the following spreadsheet:
        ---
        "Participants:Surveyslot:Survey:name", "Participants:Surveyslot:Timeslot:name", "Participants:Surveyslot:Location:name","Participants:Person:name",Role
        Birds with Nick Fitzgerald,Friday AM,Tarkine Wilderness Lodge,Nick Fitzgerald,"Survey Leader, Driver"
        Birds with Nick Fitzgerald,Friday AM,Tarkine Wilderness Lodge,Clare Hawkins,Survey Co-lead
        Birds with Nick Fitzgerald,Friday AM,Tarkine Wilderness Lodge,Michael Sharman,"Volunteer, Kitchen Hand"
        Birds with Nick Fitzgerald,Friday AM,Tarkine Wilderness Lodge,Frank McDermott,"First Aid Officer, Kitchen Assistant"
        Birds with Nick Fitzgerald,Friday AM,Tarkine Wilderness Lodge,Michael Jackson,General participant
        Birds with Nick Fitzgerald,Friday AM,Tarkine Wilderness Lodge,Ayton Senna,General participant
        Birds with Nick Fitzgerald,Friday AM,Tarkine Wilderness Lodge,Phillip Adams,General participant
        Plants with Greg Pitt,Friday AM,Forest,Greg Pitt,Survey Leader
        Plants with Greg Pitt,Friday AM,Forest,Chris Carr,Survey Co-lead
        Plants with Greg Pitt,Friday AM,Forest,Daniel Panek,"BaseCamp Site Coordinator, Driver, Data Coordinator"
        Plants with Greg Pitt,Friday AM,Forest,Melanie Faheedquar,"Kitchen Assistant, Driver"
        Plants with Greg Pitt,Friday AM,Forest,Nathalie Imbruglia,Bio-security/Hygiene Assistant
        Plants with Greg Pitt,Friday AM,Forest,Frank Knight,General participant
        Plants with Greg Pitt,Friday AM,Forest,Adam Bennett,General participant
        Plants with Greg Pitt,Friday AM,Forest,Sam McIntosh,General participant
        Slimemoulds with Rob Pergl,Friday AM,Plains,Rob Pergl,Survey Leader
        Slimemoulds with Rob Pergl,Friday AM,Plains,Yolanda Hanusch,Survey Co-lead
        Slimemoulds with Rob Pergl,Friday AM,Plains,Jasmine Wills,"Transport Coordintor, BaseCamp Site Coordinator, Driver"
        Slimemoulds with Rob Pergl,Friday AM,Plains,Francis McDermott,"First Aid Officer, M&E Assistant"
        Slimemoulds with Rob Pergl,Friday AM,Plains,Gaby Jung,General participant
        Slimemoulds with Rob Pergl,Friday AM,Plains,Emily Wilcox,General participant
        Slimemoulds with Rob Pergl,Friday AM,Plains,Samantha  Mannes,General participant
        Freshwater Invertebrates with Todd Walsh,Friday PM,Coast,Todd Walsh,Survey Leader
        Freshwater Invertebrates with Todd Walsh,Friday PM,Coast,Rohan Amazadeen,Survey Co-lead
        Freshwater Invertebrates with Todd Walsh,Friday PM,Coast,Jenny Webber,"Event Manager, BaseCamp Site Coordinator, Driver"
        Freshwater Invertebrates with Todd Walsh,Friday PM,Coast,Jean Jeanerette,"IT Assistant, SocialMedia Assistant"
        Freshwater Invertebrates with Todd Walsh,Friday PM,Coast,Gregory Intox,General participant
        Freshwater Invertebrates with Todd Walsh,Friday PM,Coast,Samuel Beckett,General participant
        Freshwater Invertebrates with Todd Walsh,Friday PM,Coast,Richard Desiree,General participant
        Mosses and Lichens with Peter Gell,Friday PM,Tarkine Wilderness Lodge,Peter Gell,Survey Leader
        Mosses and Lichens with Peter Gell,Friday PM,Tarkine Wilderness Lodge,Clare Hawkins,Survey Co-lead
        Mosses and Lichens with Peter Gell,Friday PM,Tarkine Wilderness Lodge,Michael Sharman,"Volunteer, Kitchen Hand"
        Mosses and Lichens with Peter Gell,Friday PM,Tarkine Wilderness Lodge,Michelle Faheed,Kitchen Assistant
        Mosses and Lichens with Peter Gell,Friday PM,Tarkine Wilderness Lodge,Frank McDermott,"First Aid Officer, Kitchen Assistant"
        Mosses and Lichens with Peter Gell,Friday PM,Tarkine Wilderness Lodge,Michael Jackson,General participant
        Mosses and Lichens with Peter Gell,Friday PM,Tarkine Wilderness Lodge,Ayton Senna,General participant
        Mosses and Lichens with Peter Gell,Friday PM,Tarkine Wilderness Lodge,Phillip Adams,General participant
        Orchids with Richard Newport,Friday PM,Plains,Richard Newport,Survey Leader
        Orchids with Richard Newport,Friday PM,Plains,Yolanda Hanusch,Survey Co-lead
        Orchids with Richard Newport,Friday PM,Plains,Emma Wasson,"Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains"
        Orchids with Richard Newport,Friday PM,Plains,Jasmine Wills,"Transport Coordintor, BaseCamp Site Coordinator, Driver"
        Orchids with Richard Newport,Friday PM,Plains,Francis McDermott,"First Aid Officer, M&E Assistant"
        Orchids with Richard Newport,Friday PM,Plains,Gaby Jung,General participant
        Orchids with Richard Newport,Friday PM,Plains,Emily Wilcox,General participant
        Orchids with Richard Newport,Friday PM,Plains,Samantha  Mannes,General participant
        Fungi with Nick Fitzgerald,Friday NIGHT,Coast,Nick Fitzgerald,"Survey Leader, Driver"
        Fungi with Nick Fitzgerald,Friday NIGHT,Coast,Rohan Amazadeen,Survey Co-lead
        Fungi with Nick Fitzgerald,Friday NIGHT,Coast,Jenny Webber,"Event Manager, BaseCamp Site Coordinator, Driver"
        Fungi with Nick Fitzgerald,Friday NIGHT,Coast,Jean Jeanerette,"IT Assistant, SocialMedia Assistant"
        Fungi with Nick Fitzgerald,Friday NIGHT,Coast,Gregory Intox,General participant
        Fungi with Nick Fitzgerald,Friday NIGHT,Coast,Samuel Beckett,General participant
        Fungi with Nick Fitzgerald,Friday NIGHT,Coast,Richard Desiree,General participant
        Insects with Greg Pitt,Friday NIGHT,Forest,Greg Pitt,Survey Leader
        Insects with Greg Pitt,Friday NIGHT,Forest,Chris Carr,Survey Co-lead
        Insects with Greg Pitt,Friday NIGHT,Forest,Daniel Panek,"BaseCamp Site Coordinator, Driver, Data Coordinator"
        Insects with Greg Pitt,Friday NIGHT,Forest,Melanie Faheedquar,"Kitchen Assistant, Driver"
        Insects with Greg Pitt,Friday NIGHT,Forest,Nathalie Imbruglia,Bio-security/Hygiene Assistant
        Insects with Greg Pitt,Friday NIGHT,Forest,Frank Knight,General participant
        Insects with Greg Pitt,Friday NIGHT,Forest,Adam Bennett,General participant
        Insects with Greg Pitt,Friday NIGHT,Forest,Sam McIntosh,General participant
        Birds and Mammals with Rob Pergl,Saturday DAWN,Plains,Rob Pergl,Survey Leader
        Birds and Mammals with Rob Pergl,Saturday DAWN,Plains,Yolanda Hanusch,Survey Co-lead
        Birds and Mammals with Rob Pergl,Saturday DAWN,Plains,Michael Sharman,"Volunteer, Kitchen Hand"
        Birds and Mammals with Rob Pergl,Saturday DAWN,Plains,Frank McDermott,"First Aid Officer, Kitchen Assistant"
        Birds and Mammals with Rob Pergl,Saturday DAWN,Plains,Frank Knight,General participant
        Birds and Mammals with Rob Pergl,Saturday DAWN,Plains,Adam Bennett,General participant
        Birds and Mammals with Rob Pergl,Saturday DAWN,Plains,Sam McIntosh,General participant
        Orchids & Frogs with Todd Walsh,Saturday DAWN,Coast,Todd Walsh,Survey Leader
        Orchids & Frogs with Todd Walsh,Saturday DAWN,Coast,Rohan Amazadeen,Survey Co-lead
        Orchids & Frogs with Todd Walsh,Saturday DAWN,Coast,Daniel Panek,"BaseCamp Site Coordinator, Driver, Data Coordinator"
        Orchids & Frogs with Todd Walsh,Saturday DAWN,Coast,Jean Jeanerette,"IT Assistant, SocialMedia Assistant"
        Orchids & Frogs with Todd Walsh,Saturday DAWN,Coast,Michael Jackson,General participant
        Orchids & Frogs with Todd Walsh,Saturday DAWN,Coast,Ayton Senna,General participant
        Orchids & Frogs with Todd Walsh,Saturday DAWN,Coast,Phillip Adams,General participant
        Invertebrates with Peter Gell,Saturday AM,Forest,Peter Gell,Survey Leader
        Invertebrates with Peter Gell,Saturday AM,Forest,Clare Hawkins,Survey Co-lead
        Invertebrates with Peter Gell,Saturday AM,Forest,Jenny Webber,"Event Manager, BaseCamp Site Coordinator, Driver"
        Invertebrates with Peter Gell,Saturday AM,Forest,Michelle Faheed,Kitchen Assistant
        Invertebrates with Peter Gell,Saturday AM,Forest,Nathalie Imbruglia,Bio-security/Hygiene Assistant
        Invertebrates with Peter Gell,Saturday AM,Forest,Gaby Jung,General participant
        Invertebrates with Peter Gell,Saturday AM,Forest,Emily Wilcox,General participant
        Invertebrates with Peter Gell,Saturday AM,Forest,Samantha  Mannes,General participant
        Bryophytes with Richard Newport,Saturday AM,Plains,Richard Newport,Survey Leader
        Bryophytes with Richard Newport,Saturday AM,Plains,Chris Carr,Survey Co-lead
        Bryophytes with Richard Newport,Saturday AM,Plains,Emma Wasson,"Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains"
        Bryophytes with Richard Newport,Saturday AM,Plains,Francis McDermott,"First Aid Officer, M&E Assistant"
        Bryophytes with Richard Newport,Saturday AM,Plains,Frank McDermott,"First Aid Officer, Kitchen Assistant"
        Bryophytes with Richard Newport,Saturday AM,Plains,Frank Knight,General participant
        Bryophytes with Richard Newport,Saturday AM,Plains,Gregory Intox,General participant
        Bryophytes with Richard Newport,Saturday AM,Plains,Samuel Beckett,General participant
        Macro Photography Workshop with Nick Fitzgerald,Saturday AM,Plains,Nick Fitzgerald,"Survey Leader, Driver"
        Macro Photography Workshop with Nick Fitzgerald,Saturday AM,Plains,Yolanda Hanusch,Survey Co-lead
        Macro Photography Workshop with Nick Fitzgerald,Saturday AM,Plains,Michael Sharman,"Volunteer, Kitchen Hand"
        Macro Photography Workshop with Nick Fitzgerald,Saturday AM,Plains,Melanie Faheedquar,"Kitchen Assistant, Driver"
        Macro Photography Workshop with Nick Fitzgerald,Saturday AM,Plains,Adam Bennett,General participant
        Macro Photography Workshop with Nick Fitzgerald,Saturday AM,Plains,Sam McIntosh,General participant
        Macro Photography Workshop with Nick Fitzgerald,Saturday AM,Plains,Richard Desiree,General participant
        Freshwater Crayfish with Greg Pitt,Saturday AM,Coast,Greg Pitt,Survey Leader
        Freshwater Crayfish with Greg Pitt,Saturday AM,Coast,Rohan Amazadeen,Survey Co-lead
        Freshwater Crayfish with Greg Pitt,Saturday AM,Coast,Daniel Panek,"BaseCamp Site Coordinator, Driver, Data Coordinator"
        Freshwater Crayfish with Greg Pitt,Saturday AM,Coast,Michael Jackson,General participant
        Freshwater Crayfish with Greg Pitt,Saturday AM,Coast,Ayton Senna,General participant
        "Mammals, Spotlighting and Frogs with Rob Pergl",Saturday AM,Coast,Rob Pergl,Survey Leader
        "Mammals, Spotlighting and Frogs with Rob Pergl",Saturday AM,Coast,Tim Amazadeen,Survey Co-lead
        "Mammals, Spotlighting and Frogs with Rob Pergl",Saturday AM,Coast,Jasmine Wills,"Transport Coordintor, BaseCamp Site Coordinator, Driver"
        "Mammals, Spotlighting and Frogs with Rob Pergl",Saturday AM,Coast,Jean Jeanerette,"IT Assistant, SocialMedia Assistant"
        "Mammals, Spotlighting and Frogs with Rob Pergl",Saturday AM,Coast,Phillip Adams,General participant
        "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Saturday PM,Forest,Todd Walsh,Survey Leader
        "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Saturday PM,Forest,Clare Hawkins,Survey Co-lead
        "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Saturday PM,Forest,Michelle Faheed,Kitchen Assistant
        "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Saturday PM,Forest,Gaby Jung,General participant
        "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Saturday PM,Forest,Emily Wilcox,General participant
        Art Installation with Peter Gell,Saturday PM,Plains,Peter Gell,Survey Leader
        Art Installation with Peter Gell,Saturday PM,Plains,Yolanda Hanusch,Survey Co-lead
        Art Installation with Peter Gell,Saturday PM,Plains,Michael Sharman,"Volunteer, Kitchen Hand"
        Art Installation with Peter Gell,Saturday PM,Plains,Emma Wasson,"Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains"
        Art Installation with Peter Gell,Saturday PM,Plains,Francis McDermott,"First Aid Officer, M&E Assistant"
        Art Installation with Peter Gell,Saturday PM,Plains,Frank McDermott,"First Aid Officer, Kitchen Assistant"
        Art Installation with Peter Gell,Saturday PM,Plains,Adam Bennett,General participant
        Art Installation with Peter Gell,Saturday PM,Plains,Sam McIntosh,General participant
        Diatom algae with Richard Newport,Saturday PM,Coast,Richard Newport,Survey Leader
        Diatom algae with Richard Newport,Saturday PM,Coast,Rohan Amazadeen,Survey Co-lead
        Diatom algae with Richard Newport,Saturday PM,Coast,Daniel Panek,"BaseCamp Site Coordinator, Driver, Data Coordinator"
        Diatom algae with Richard Newport,Saturday PM,Coast,Jasmine Wills,"Transport Coordintor, BaseCamp Site Coordinator, Driver"
        Diatom algae with Richard Newport,Saturday PM,Coast,Melanie Faheedquar,"Kitchen Assistant, Driver"
        Diatom algae with Richard Newport,Saturday PM,Coast,Jean Jeanerette,"IT Assistant, SocialMedia Assistant"
        Diatom algae with Richard Newport,Saturday PM,Coast,Michael Jackson,General participant
        Diatom algae with Richard Newport,Saturday PM,Coast,Ayton Senna,General participant
        Diatom algae with Richard Newport,Saturday PM,Coast,Phillip Adams,General participant
        Waterbugs with Rob Pergl,Saturday PM,Forest,Rob Pergl,Survey Leader
        Waterbugs with Rob Pergl,Saturday PM,Forest,Jenny Webber,"Event Manager, BaseCamp Site Coordinator, Driver"
        Waterbugs with Rob Pergl,Saturday PM,Forest,Nathalie Imbruglia,Bio-security/Hygiene Assistant
        Waterbugs with Rob Pergl,Saturday PM,Forest,Samantha  Mannes,General participant
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Rob Pergl,Survey Leader
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Chris Carr,Survey Co-lead
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Michael Sharman,"Volunteer, Kitchen Hand"
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Emma Wasson,"Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains"
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Francis McDermott,"First Aid Officer, M&E Assistant"
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Frank McDermott,"First Aid Officer, Kitchen Assistant"
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Adam Bennett,General participant
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Sam McIntosh,General participant
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Gregory Intox,General participant
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Samuel Beckett,General participant
        Birds and Mammals with Rob Pergl,Saturday NIGHT,Plains,Richard Desiree,General participant
        Orchids & Frogs with Todd Walsh,Saturday NIGHT,Coast,Todd Walsh,Survey Leader
        Orchids & Frogs with Todd Walsh,Saturday NIGHT,Coast,Rohan Amazadeen,Survey Co-lead
        Orchids & Frogs with Todd Walsh,Saturday NIGHT,Coast,Daniel Panek,"BaseCamp Site Coordinator, Driver, Data Coordinator"
        Orchids & Frogs with Todd Walsh,Saturday NIGHT,Coast,Jasmine Wills,"Transport Coordintor, BaseCamp Site Coordinator, Driver"
        Orchids & Frogs with Todd Walsh,Saturday NIGHT,Coast,Melanie Faheedquar,"Kitchen Assistant, Driver"
        Orchids & Frogs with Todd Walsh,Saturday NIGHT,Coast,Jean Jeanerette,"IT Assistant, SocialMedia Assistant"
        Invertebrates with Peter Gell,Sunday DAWN,Plains,Peter Gell,Survey Leader
        Invertebrates with Peter Gell,Sunday DAWN,Plains,Tim Amazadeen,Survey Co-lead
        Invertebrates with Peter Gell,Sunday DAWN,Plains,Michael Sharman,"Volunteer, Kitchen Hand"
        Invertebrates with Peter Gell,Sunday DAWN,Plains,Frank McDermott,"First Aid Officer, Kitchen Assistant"
        Invertebrates with Peter Gell,Sunday DAWN,Plains,Jean Jeanerette,"IT Assistant, SocialMedia Assistant"
        Invertebrates with Peter Gell,Sunday DAWN,Plains,Gaby Jung,General participant
        Invertebrates with Peter Gell,Sunday DAWN,Plains,Emily Wilcox,General participant
        Invertebrates with Peter Gell,Sunday DAWN,Plains,Samantha  Mannes,General participant
        Bryophytes with Richard Newport,Sunday AM,Coast,Richard Newport,Survey Leader
        Bryophytes with Richard Newport,Sunday AM,Coast,Yolanda Hanusch,Survey Co-lead
        Bryophytes with Richard Newport,Sunday AM,Coast,Daniel Panek,"BaseCamp Site Coordinator, Driver, Data Coordinator"
        Bryophytes with Richard Newport,Sunday AM,Coast,Nathalie Imbruglia,Bio-security/Hygiene Assistant
        Bryophytes with Richard Newport,Sunday AM,Coast,Michael Jackson,General participant
        Bryophytes with Richard Newport,Sunday AM,Coast,Ayton Senna,General participant
        Bryophytes with Richard Newport,Sunday AM,Coast,Gregory Intox,General participant
        Macro Photography Workshop with Nick Fitzgerald,Sunday AM,Forest,Nick Fitzgerald,"Survey Leader, Driver"
        Macro Photography Workshop with Nick Fitzgerald,Sunday AM,Forest,Rohan Amazadeen,Survey Co-lead
        Macro Photography Workshop with Nick Fitzgerald,Sunday AM,Forest,Jenny Webber,"Event Manager, BaseCamp Site Coordinator, Driver"
        Macro Photography Workshop with Nick Fitzgerald,Sunday AM,Forest,Frank Knight,General participant
        Macro Photography Workshop with Nick Fitzgerald,Sunday AM,Forest,Adam Bennett,General participant
        Freshwater Crayfish with Greg Pitt,Sunday AM,Coast,Greg Pitt,Survey Leader
        Freshwater Crayfish with Greg Pitt,Sunday AM,Coast,Emma Wasson,"Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains"
        Freshwater Crayfish with Greg Pitt,Sunday AM,Coast,Michelle Faheed,Kitchen Assistant
        Freshwater Crayfish with Greg Pitt,Sunday AM,Coast,Francis McDermott,"First Aid Officer, M&E Assistant"
        Freshwater Crayfish with Greg Pitt,Sunday AM,Coast,Phillip Adams,General participant
        Freshwater Crayfish with Greg Pitt,Sunday AM,Coast,Samuel Beckett,General participant
        Freshwater Crayfish with Greg Pitt,Sunday AM,Coast,Richard Desiree,General participant
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday AM,Forest,Rob Pergl,Survey Leader
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday AM,Forest,Jasmine Wills,"Transport Coordintor, BaseCamp Site Coordinator, Driver"
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday AM,Forest,Melanie Faheedquar,"Kitchen Assistant, Driver"
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday AM,Forest,Sam McIntosh,General participant
        "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Sunday PM,Plains,Todd Walsh,Survey Leader
        "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Sunday PM,Plains,Tim Amazadeen,Survey Co-lead
        "Mammals, Scats & Traces & Pack down cameras with Todd Walsh",Sunday PM,Plains,Michael Sharman,"Volunteer, Kitchen Hand"
        Art Installation with Peter Gell,Sunday PM,Coast,Peter Gell,Survey Leader
        Art Installation with Peter Gell,Sunday PM,Coast,Yolanda Hanusch,Survey Co-lead
        Art Installation with Peter Gell,Sunday PM,Coast,Daniel Panek,"BaseCamp Site Coordinator, Driver, Data Coordinator"
        Art Installation with Peter Gell,Sunday PM,Coast,Emma Wasson,"Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains"
        Art Installation with Peter Gell,Sunday PM,Coast,Michelle Faheed,Kitchen Assistant
        Art Installation with Peter Gell,Sunday PM,Coast,Francis McDermott,"First Aid Officer, M&E Assistant"
        Art Installation with Peter Gell,Sunday PM,Coast,Nathalie Imbruglia,Bio-security/Hygiene Assistant
        Art Installation with Peter Gell,Sunday PM,Coast,Phillip Adams,General participant
        Diatom algae with Richard Newport,Sunday PM,Forest,Richard Newport,Survey Leader
        Diatom algae with Richard Newport,Sunday PM,Forest,Rohan Amazadeen,Survey Co-lead
        Diatom algae with Richard Newport,Sunday PM,Forest,Jenny Webber,"Event Manager, BaseCamp Site Coordinator, Driver"
        Diatom algae with Richard Newport,Sunday PM,Forest,Jasmine Wills,"Transport Coordintor, BaseCamp Site Coordinator, Driver"
        Diatom algae with Richard Newport,Sunday PM,Forest,Melanie Faheedquar,"Kitchen Assistant, Driver"
        Diatom algae with Richard Newport,Sunday PM,Forest,Frank Knight,General participant
        Diatom algae with Richard Newport,Sunday PM,Forest,Adam Bennett,General participant
        Diatom algae with Richard Newport,Sunday PM,Forest,Sam McIntosh,General participant
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday PM,Plains,Rob Pergl,Survey Leader
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday PM,Plains,Tim Amazadeen,Survey Co-lead
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday PM,Plains,Frank McDermott,"First Aid Officer, Kitchen Assistant"
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday PM,Plains,Jean Jeanerette,"IT Assistant, SocialMedia Assistant"
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday PM,Plains,Gaby Jung,General participant
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday PM,Plains,Emily Wilcox,General participant
        "Mammals, Spotlighting and Frogs with Rob Pergl",Sunday PM,Plains,Samantha Mannes,General participant
        ---

      Then the following survey assignment should be created:

      | Survey | Timeslot | Location | SurveySpot | Participant | Roles |
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|1|Nick Fitzgerald|Survey Leader, Driver
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|2|Clare Hawkins|Survey Co-lead
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|3|Michael Sharman|Volunteer, Kitchen Hand
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|4|Frank McDermott|First Aid Officer, Kitchen Assistant
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|5|Michael Jackson|General participant
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|6|Ayton Senna|General participant
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|7|Phillip Adams|General participant
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|8||
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|9||
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|10||
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|11||
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|12||
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|13||
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|14||
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|15||
      | Birds with Nick Fitzgerald|Friday AM|Tarkine Wilderness Lodge|16||
      | Plants with Greg Pitt|Friday AM|Forest|1|Greg Pitt|Survey Leader
      | Plants with Greg Pitt|Friday AM|Forest|2|Chris Carr|Survey Co-lead
      | Plants with Greg Pitt|Friday AM|Forest|3|Daniel Panek|BaseCamp Site Coordinator, Driver, Data Coordinator
      | Plants with Greg Pitt|Friday AM|Forest|4|Melanie Faheedquar|Kitchen Assistant, Driver
      | Plants with Greg Pitt|Friday AM|Forest|5|Nathalie Imbruglia|Bio-security/Hygiene Assistant
      | Plants with Greg Pitt|Friday AM|Forest|6|Frank Knight|General participant
      | Plants with Greg Pitt|Friday AM|Forest|7|Adam Bennett|General participant
      | Plants with Greg Pitt|Friday AM|Forest|8|Sam McIntosh|General participant
      | Plants with Greg Pitt|Friday AM|Forest|9||
      | Plants with Greg Pitt|Friday AM|Forest|10||
      | Plants with Greg Pitt|Friday AM|Forest|11||
      | Plants with Greg Pitt|Friday AM|Forest|12||
      | Slimemoulds with Rob Pergl|Friday AM|Plains|1|Rob Pergl|Survey Leader
      | Slimemoulds with Rob Pergl|Friday AM|Plains|2|Yolanda Hanusch|Survey Co-lead
      | Slimemoulds with Rob Pergl|Friday AM|Plains|3|Jasmine Wills|Transport Coordintor, BaseCamp Site Coordinator, Driver
      | Slimemoulds with Rob Pergl|Friday AM|Plains|4|Francis McDermott|First Aid Officer, M&E Assistant
      | Slimemoulds with Rob Pergl|Friday AM|Plains|5|Gaby Jung|General participant
      | Slimemoulds with Rob Pergl|Friday AM|Plains|6|Emily Wilcox|General participant
      | Slimemoulds with Rob Pergl|Friday AM|Plains|7|Samantha  Mannes|General participant
      | Slimemoulds with Rob Pergl|Friday AM|Plains|8||
      | Slimemoulds with Rob Pergl|Friday AM|Plains|9||
      | Slimemoulds with Rob Pergl|Friday AM|Plains|10||
      | Slimemoulds with Rob Pergl|Friday AM|Plains|11||
      | Slimemoulds with Rob Pergl|Friday AM|Plains|12||
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|1|Todd Walsh|Survey Leader
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|2|Rohan Amazadeen|Survey Co-lead
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|3|Jenny Webber|Event Manager, BaseCamp Site Coordinator, Driver
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|4|Jean Jeanerette|IT Assistant, SocialMedia Assistant
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|5|Gregory Intox|General participant
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|6|Samuel Beckett|General participant
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|7|Richard Desiree|General participant
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|8||
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|9||
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|10||
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|11||
      | Freshwater Invertebrates with Todd Walsh|Friday PM|Coast|12||
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|1|Peter Gell|Survey Leader
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|2|Clare Hawkins|Survey Co-lead
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|3|Michael Sharman|Volunteer, Kitchen Hand
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|4|Michelle Faheed|Kitchen Assistant
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|5|Frank McDermott|First Aid Officer, Kitchen Assistant
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|6|Michael Jackson|General participant
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|7|Ayton Senna|General participant
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|8|Phillip Adams|General participant
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|9||
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|10||
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|11||
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|12||
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|13||
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|14||
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|15||
      | Mosses and Lichens with Peter Gell|Friday PM|Tarkine Wilderness Lodge|16||
      | Orchids with Richard Newport|Friday PM|Plains|1|Richard Newport|Survey Leader
      | Orchids with Richard Newport|Friday PM|Plains|2|Yolanda Hanusch|Survey Co-lead
      | Orchids with Richard Newport|Friday PM|Plains|3|Emma Wasson|Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains
      | Orchids with Richard Newport|Friday PM|Plains|4|Jasmine Wills|Transport Coordintor, BaseCamp Site Coordinator, Driver
      | Orchids with Richard Newport|Friday PM|Plains|5|Francis McDermott|First Aid Officer, M&E Assistant
      | Orchids with Richard Newport|Friday PM|Plains|6|Gaby Jung|General participant
      | Orchids with Richard Newport|Friday PM|Plains|7|Emily Wilcox|General participant
      | Orchids with Richard Newport|Friday PM|Plains|8|Samantha  Mannes|General participant
      | Orchids with Richard Newport|Friday PM|Plains|9||
      | Orchids with Richard Newport|Friday PM|Plains|10||
      | Orchids with Richard Newport|Friday PM|Plains|11||
      | Orchids with Richard Newport|Friday PM|Plains|12||
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|1|Nick Fitzgerald|Survey Leader, Driver
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|2|Rohan Amazadeen|Survey Co-lead
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|3|Jenny Webber|Event Manager, BaseCamp Site Coordinator, Driver
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|4|Jean Jeanerette|IT Assistant, SocialMedia Assistant
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|5|Gregory Intox|General participant
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|6|Samuel Beckett|General participant
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|7|Richard Desiree|General participant
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|8||
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|9||
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|10||
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|11||
      | Fungi with Nick Fitzgerald|Friday NIGHT|Coast|12||
      | Insects with Greg Pitt|Friday NIGHT|Forest|1|Greg Pitt|Survey Leader
      | Insects with Greg Pitt|Friday NIGHT|Forest|2|Chris Carr|Survey Co-lead
      | Insects with Greg Pitt|Friday NIGHT|Forest|3|Daniel Panek|BaseCamp Site Coordinator, Driver, Data Coordinator
      | Insects with Greg Pitt|Friday NIGHT|Forest|4|Melanie Faheedquar|Kitchen Assistant, Driver
      | Insects with Greg Pitt|Friday NIGHT|Forest|5|Nathalie Imbruglia|Bio-security/Hygiene Assistant
      | Insects with Greg Pitt|Friday NIGHT|Forest|6|Frank Knight|General participant
      | Insects with Greg Pitt|Friday NIGHT|Forest|7|Adam Bennett|General participant
      | Insects with Greg Pitt|Friday NIGHT|Forest|8|Sam McIntosh|General participant
      | Insects with Greg Pitt|Friday NIGHT|Forest|9||
      | Insects with Greg Pitt|Friday NIGHT|Forest|10||
      | Insects with Greg Pitt|Friday NIGHT|Forest|11||
      | Insects with Greg Pitt|Friday NIGHT|Forest|12||
      | Birds and Mammals with Rob Pergl|Saturday DAWN|Plains|1|Rob Pergl|Survey Leader
      | Birds and Mammals with Rob Pergl|Saturday DAWN|Plains|2|Yolanda Hanusch|Survey Co-lead
      | Birds and Mammals with Rob Pergl|Saturday DAWN|Plains|3|Michael Sharman|Volunteer, Kitchen Hand
      | Birds and Mammals with Rob Pergl|Saturday DAWN|Plains|4|Frank McDermott|First Aid Officer, Kitchen Assistant
      | Birds and Mammals with Rob Pergl|Saturday DAWN|Plains|5|Frank Knight|General participant
      | Birds and Mammals with Rob Pergl|Saturday DAWN|Plains|6|Adam Bennett|General participant
      | Birds and Mammals with Rob Pergl|Saturday DAWN|Plains|7|Sam McIntosh|General participant
      | Birds and Mammals with Rob Pergl|Saturday DAWN|Plains|8||
      | Orchids & Frogs with Todd Walsh|Saturday DAWN|Coast|1|Todd Walsh|Survey Leader
      | Orchids & Frogs with Todd Walsh|Saturday DAWN|Coast|2|Rohan Amazadeen|Survey Co-lead
      | Orchids & Frogs with Todd Walsh|Saturday DAWN|Coast|3|Daniel Panek|BaseCamp Site Coordinator, Driver, Data Coordinator
      | Orchids & Frogs with Todd Walsh|Saturday DAWN|Coast|4|Jean Jeanerette|IT Assistant, SocialMedia Assistant
      | Orchids & Frogs with Todd Walsh|Saturday DAWN|Coast|5|Michael Jackson|General participant
      | Orchids & Frogs with Todd Walsh|Saturday DAWN|Coast|6|Ayton Senna|General participant
      | Orchids & Frogs with Todd Walsh|Saturday DAWN|Coast|7|Phillip Adams|General participant
      | Orchids & Frogs with Todd Walsh|Saturday DAWN|Coast|8||
      | Invertebrates with Peter Gell|Saturday AM|Forest|1|Peter Gell|Survey Leader
      | Invertebrates with Peter Gell|Saturday AM|Forest|2|Clare Hawkins|Survey Co-lead
      | Invertebrates with Peter Gell|Saturday AM|Forest|3|Jenny Webber|Event Manager, BaseCamp Site Coordinator, Driver
      | Invertebrates with Peter Gell|Saturday AM|Forest|4|Michelle Faheed|Kitchen Assistant
      | Invertebrates with Peter Gell|Saturday AM|Forest|5|Nathalie Imbruglia|Bio-security/Hygiene Assistant
      | Invertebrates with Peter Gell|Saturday AM|Forest|6|Gaby Jung|General participant
      | Invertebrates with Peter Gell|Saturday AM|Forest|7|Emily Wilcox|General participant
      | Invertebrates with Peter Gell|Saturday AM|Forest|8|Samantha  Mannes|General participant
      | Invertebrates with Peter Gell|Saturday AM|Forest|9||
      | Invertebrates with Peter Gell|Saturday AM|Forest|10||
      | Invertebrates with Peter Gell|Saturday AM|Forest|11||
      | Invertebrates with Peter Gell|Saturday AM|Forest|12||
      | Bryophytes with Richard Newport|Saturday AM|Plains|1|Richard Newport|Survey Leader
      | Bryophytes with Richard Newport|Saturday AM|Plains|2|Chris Carr|Survey Co-lead
      | Bryophytes with Richard Newport|Saturday AM|Plains|3|Emma Wasson|Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains
      | Bryophytes with Richard Newport|Saturday AM|Plains|4|Francis McDermott|First Aid Officer, M&E Assistant
      | Bryophytes with Richard Newport|Saturday AM|Plains|5|Frank McDermott|First Aid Officer, Kitchen Assistant
      | Bryophytes with Richard Newport|Saturday AM|Plains|6|Frank Knight|General participant
      | Bryophytes with Richard Newport|Saturday AM|Plains|7|Gregory Intox|General participant
      | Bryophytes with Richard Newport|Saturday AM|Plains|8|Samuel Beckett|General participant
      | Bryophytes with Richard Newport|Saturday AM|Plains|9||
      | Bryophytes with Richard Newport|Saturday AM|Plains|10||
      | Bryophytes with Richard Newport|Saturday AM|Plains|11||
      | Bryophytes with Richard Newport|Saturday AM|Plains|12||
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|1|Nick Fitzgerald|Survey Leader, Driver
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|2|Yolanda Hanusch|Survey Co-lead
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|3|Michael Sharman|Volunteer, Kitchen Hand
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|4|Melanie Faheedquar|Kitchen Assistant, Driver
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|5|Adam Bennett|General participant
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|6|Sam McIntosh|General participant
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|7|Richard Desiree|General participant
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|8||
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|9||
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|10||
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|11||
      | Macro Photography Workshop with Nick Fitzgerald|Saturday AM|Plains|12||
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|1|Greg Pitt|Survey Leader
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|2|Rohan Amazadeen|Survey Co-lead
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|3|Daniel Panek|BaseCamp Site Coordinator, Driver, Data Coordinator
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|4|Michael Jackson|General participant
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|5|Ayton Senna|General participant
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|6||
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|7||
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|8||
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|9||
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|10||
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|11||
      | Freshwater Crayfish with Greg Pitt|Saturday AM|Coast|12||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Saturday AM|Coast|1|Rob Pergl|Survey Leader
      | Mammals, Spotlighting and Frogs with Rob Pergl|Saturday AM|Coast|2|Tim Amazadeen|Survey Co-lead
      | Mammals, Spotlighting and Frogs with Rob Pergl|Saturday AM|Coast|3|Jasmine Wills|Transport Coordintor, BaseCamp Site Coordinator, Driver
      | Mammals, Spotlighting and Frogs with Rob Pergl|Saturday AM|Coast|4|Jean Jeanerette|IT Assistant, SocialMedia Assistant
      | Mammals, Spotlighting and Frogs with Rob Pergl|Saturday AM|Coast|5|Phillip Adams|General participant
      | Mammals, Spotlighting and Frogs with Rob Pergl|Saturday AM|Coast|6||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Saturday AM|Coast|7||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Saturday AM|Coast|8||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|1|Todd Walsh|Survey Leader
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|2|Clare Hawkins|Survey Co-lead
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|3|Michelle Faheed|Kitchen Assistant
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|4|Gaby Jung|General participant
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|5|Emily Wilcox|General participant
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|6||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|7||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|8||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|9||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|10||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|11||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Saturday PM|Forest|12||
      | Art Installation with Peter Gell|Saturday PM|Plains|1|Peter Gell|Survey Leader
      | Art Installation with Peter Gell|Saturday PM|Plains|2|Yolanda Hanusch|Survey Co-lead
      | Art Installation with Peter Gell|Saturday PM|Plains|3|Michael Sharman|Volunteer, Kitchen Hand
      | Art Installation with Peter Gell|Saturday PM|Plains|4|Emma Wasson|Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains
      | Art Installation with Peter Gell|Saturday PM|Plains|5|Francis McDermott|First Aid Officer, M&E Assistant
      | Art Installation with Peter Gell|Saturday PM|Plains|6|Frank McDermott|First Aid Officer, Kitchen Assistant
      | Art Installation with Peter Gell|Saturday PM|Plains|7|Adam Bennett|General participant
      | Art Installation with Peter Gell|Saturday PM|Plains|8|Sam McIntosh|General participant
      | Diatom algae with Richard Newport|Saturday PM|Coast|1|Richard Newport|Survey Leader
      | Diatom algae with Richard Newport|Saturday PM|Coast|2|Rohan Amazadeen|Survey Co-lead
      | Diatom algae with Richard Newport|Saturday PM|Coast|3|Daniel Panek|BaseCamp Site Coordinator, Driver, Data Coordinator
      | Diatom algae with Richard Newport|Saturday PM|Coast|4|Jasmine Wills|Transport Coordintor, BaseCamp Site Coordinator, Driver
      | Diatom algae with Richard Newport|Saturday PM|Coast|5|Melanie Faheedquar|Kitchen Assistant, Driver
      | Diatom algae with Richard Newport|Saturday PM|Coast|6|Jean Jeanerette|IT Assistant, SocialMedia Assistant
      | Diatom algae with Richard Newport|Saturday PM|Coast|7|Michael Jackson|General participant
      | Diatom algae with Richard Newport|Saturday PM|Coast|8|Ayton Senna|General participant
      | Diatom algae with Richard Newport|Saturday PM|Coast|9|Phillip Adams|General participant
      | Diatom algae with Richard Newport|Saturday PM|Coast|10||
      | Diatom algae with Richard Newport|Saturday PM|Coast|11||
      | Diatom algae with Richard Newport|Saturday PM|Coast|12||
      | Waterbugs with Rob Pergl|Saturday PM|Forest|1|Rob Pergl|Survey Leader
      | Waterbugs with Rob Pergl|Saturday PM|Forest|2|Jenny Webber|Event Manager, BaseCamp Site Coordinator, Driver
      | Waterbugs with Rob Pergl|Saturday PM|Forest|3|Nathalie Imbruglia|Bio-security/Hygiene Assistant
      | Waterbugs with Rob Pergl|Saturday PM|Forest|4|Samantha  Mannes|General participant
      | Waterbugs with Rob Pergl|Saturday PM|Forest|5||
      | Waterbugs with Rob Pergl|Saturday PM|Forest|6||
      | Waterbugs with Rob Pergl|Saturday PM|Forest|7||
      | Waterbugs with Rob Pergl|Saturday PM|Forest|8||
      | Waterbugs with Rob Pergl|Saturday PM|Forest|9||
      | Waterbugs with Rob Pergl|Saturday PM|Forest|10||
      | Waterbugs with Rob Pergl|Saturday PM|Forest|11||
      | Waterbugs with Rob Pergl|Saturday PM|Forest|12||
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|1|Rob Pergl|Survey Leader
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|2|Chris Carr|Survey Co-lead
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|3|Michael Sharman|Volunteer, Kitchen Hand
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|4|Emma Wasson|Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|5|Francis McDermott|First Aid Officer, M&E Assistant
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|6|Frank McDermott|First Aid Officer, Kitchen Assistant
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|7|Adam Bennett|General participant
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|8|Sam McIntosh|General participant
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|9|Gregory Intox|General participant
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|10|Samuel Beckett|General participant
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|11|Richard Desiree|General participant
      | Birds and Mammals with Rob Pergl|Saturday NIGHT|Plains|12||
      | Orchids & Frogs with Todd Walsh|Saturday NIGHT|Coast|1|Todd Walsh|Survey Leader
      | Orchids & Frogs with Todd Walsh|Saturday NIGHT|Coast|2|Rohan Amazadeen|Survey Co-lead
      | Orchids & Frogs with Todd Walsh|Saturday NIGHT|Coast|3|Daniel Panek|BaseCamp Site Coordinator, Driver, Data Coordinator
      | Orchids & Frogs with Todd Walsh|Saturday NIGHT|Coast|4|Jasmine Wills|Transport Coordintor, BaseCamp Site Coordinator, Driver
      | Orchids & Frogs with Todd Walsh|Saturday NIGHT|Coast|5|Melanie Faheedquar|Kitchen Assistant, Driver
      | Orchids & Frogs with Todd Walsh|Saturday NIGHT|Coast|6|Jean Jeanerette|IT Assistant, SocialMedia Assistant
      | Orchids & Frogs with Todd Walsh|Saturday NIGHT|Coast|7||
      | Orchids & Frogs with Todd Walsh|Saturday NIGHT|Coast|8||
      | Invertebrates with Peter Gell|Sunday DAWN|Plains|1|Peter Gell|Survey Leader
      | Invertebrates with Peter Gell|Sunday DAWN|Plains|2|Tim Amazadeen|Survey Co-lead
      | Invertebrates with Peter Gell|Sunday DAWN|Plains|3|Michael Sharman|Volunteer, Kitchen Hand
      | Invertebrates with Peter Gell|Sunday DAWN|Plains|4|Frank McDermott|First Aid Officer, Kitchen Assistant
      | Invertebrates with Peter Gell|Sunday DAWN|Plains|5|Jean Jeanerette|IT Assistant, SocialMedia Assistant
      | Invertebrates with Peter Gell|Sunday DAWN|Plains|6|Gaby Jung|General participant
      | Invertebrates with Peter Gell|Sunday DAWN|Plains|7|Emily Wilcox|General participant
      | Invertebrates with Peter Gell|Sunday DAWN|Plains|8|Samantha  Mannes|General participant
      | Bryophytes with Richard Newport|Sunday AM|Coast|1|Richard Newport|Survey Leader
      | Bryophytes with Richard Newport|Sunday AM|Coast|2|Yolanda Hanusch|Survey Co-lead
      | Bryophytes with Richard Newport|Sunday AM|Coast|3|Daniel Panek|BaseCamp Site Coordinator, Driver, Data Coordinator
      | Bryophytes with Richard Newport|Sunday AM|Coast|4|Nathalie Imbruglia|Bio-security/Hygiene Assistant
      | Bryophytes with Richard Newport|Sunday AM|Coast|5|Michael Jackson|General participant
      | Bryophytes with Richard Newport|Sunday AM|Coast|6|Ayton Senna|General participant
      | Bryophytes with Richard Newport|Sunday AM|Coast|7|Gregory Intox|General participant
      | Bryophytes with Richard Newport|Sunday AM|Coast|8||
      | Bryophytes with Richard Newport|Sunday AM|Coast|9||
      | Bryophytes with Richard Newport|Sunday AM|Coast|10||
      | Bryophytes with Richard Newport|Sunday AM|Coast|11||
      | Bryophytes with Richard Newport|Sunday AM|Coast|12||
      | Macro Photography Workshop with Nick Fitzgerald|Sunday AM|Forest|1|Nick Fitzgerald|Survey Leader, Driver
      | Macro Photography Workshop with Nick Fitzgerald|Sunday AM|Forest|2|Rohan Amazadeen|Survey Co-lead
      | Macro Photography Workshop with Nick Fitzgerald|Sunday AM|Forest|3|Jenny Webber|Event Manager, BaseCamp Site Coordinator, Driver
      | Macro Photography Workshop with Nick Fitzgerald|Sunday AM|Forest|4|Frank Knight|General participant
      | Macro Photography Workshop with Nick Fitzgerald|Sunday AM|Forest|5|Adam Bennett|General participant
      | Macro Photography Workshop with Nick Fitzgerald|Sunday AM|Forest|6||
      | Macro Photography Workshop with Nick Fitzgerald|Sunday AM|Forest|7||
      | Macro Photography Workshop with Nick Fitzgerald|Sunday AM|Forest|8||
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|1|Greg Pitt|Survey Leader
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|2|Emma Wasson|Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|3|Michelle Faheed|Kitchen Assistant
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|4|Francis McDermott|First Aid Officer, M&E Assistant
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|5|Phillip Adams|General participant
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|6|Samuel Beckett|General participant
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|7|Richard Desiree|General participant
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|8||
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|9||
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|10||
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|11||
      | Freshwater Crayfish with Greg Pitt|Sunday AM|Coast|12||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|1|Rob Pergl|Survey Leader
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|2|Jasmine Wills|Transport Coordintor, BaseCamp Site Coordinator, Driver
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|3|Melanie Faheedquar|Kitchen Assistant, Driver
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|4|Sam McIntosh|General participant
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|5||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|6||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|7||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|8||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|9||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|10||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|11||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday AM|Forest|12||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Sunday PM|Plains|1|Todd Walsh|Survey Leader
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Sunday PM|Plains|2|Tim Amazadeen|Survey Co-lead
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Sunday PM|Plains|3|Michael Sharman|Volunteer, Kitchen Hand
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Sunday PM|Plains|4||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Sunday PM|Plains|5||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Sunday PM|Plains|6||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Sunday PM|Plains|7||
      | Mammals, Scats & Traces & Pack down cameras with Todd Walsh|Sunday PM|Plains|8||
      | Art Installation with Peter Gell|Sunday PM|Coast|1|Peter Gell|Survey Leader
      | Art Installation with Peter Gell|Sunday PM|Coast|2|Yolanda Hanusch|Survey Co-lead
      | Art Installation with Peter Gell|Sunday PM|Coast|3|Daniel Panek|BaseCamp Site Coordinator, Driver, Data Coordinator
      | Art Installation with Peter Gell|Sunday PM|Coast|4|Emma Wasson|Field Site Coordinator - Coast, Field Site Coordinator - Forest, Field Site Coordinator - Plains
      | Art Installation with Peter Gell|Sunday PM|Coast|5|Michelle Faheed|Kitchen Assistant
      | Art Installation with Peter Gell|Sunday PM|Coast|6|Francis McDermott|First Aid Officer, M&E Assistant
      | Art Installation with Peter Gell|Sunday PM|Coast|7|Nathalie Imbruglia|Bio-security/Hygiene Assistant
      | Art Installation with Peter Gell|Sunday PM|Coast|8|Phillip Adams|General participant
      | Diatom algae with Richard Newport|Sunday PM|Forest|1|Richard Newport|Survey Leader
      | Diatom algae with Richard Newport|Sunday PM|Forest|2|Rohan Amazadeen|Survey Co-lead
      | Diatom algae with Richard Newport|Sunday PM|Forest|3|Jenny Webber|Event Manager, BaseCamp Site Coordinator, Driver
      | Diatom algae with Richard Newport|Sunday PM|Forest|4|Jasmine Wills|Transport Coordintor, BaseCamp Site Coordinator, Driver
      | Diatom algae with Richard Newport|Sunday PM|Forest|5|Melanie Faheedquar|Kitchen Assistant, Driver
      | Diatom algae with Richard Newport|Sunday PM|Forest|6|Frank Knight|General participant
      | Diatom algae with Richard Newport|Sunday PM|Forest|7|Adam Bennett|General participant
      | Diatom algae with Richard Newport|Sunday PM|Forest|8|Sam McIntosh|General participant
      | Diatom algae with Richard Newport|Sunday PM|Forest|9||
      | Diatom algae with Richard Newport|Sunday PM|Forest|10||
      | Diatom algae with Richard Newport|Sunday PM|Forest|11||
      | Diatom algae with Richard Newport|Sunday PM|Forest|12||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|1|Rob Pergl|Survey Leader
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|2|Tim Amazadeen|Survey Co-lead
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|3|Frank McDermott|First Aid Officer, Kitchen Assistant
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|4|Jean Jeanerette|IT Assistant, SocialMedia Assistant
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|5|Gaby Jung|General participant
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|6|Emily Wilcox|General participant
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|7|Samantha  Mannes|General participant
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|8||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|9||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|10||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|11||
      | Mammals, Spotlighting and Frogs with Rob Pergl|Sunday PM|Plains|12||

    	# Then the following surveys should be created:
      #   ---
      # 	 surveyName | description
      #    "Survey_1", "Survey 1 description"
      #    "Survey_2", "Survey 2 description"
      #    "Survey_3", "Survey 3 description"
      #    "Survey_4", "Survey 4 description"
      #    "Survey_5", "Survey 5 description"
      #   ---

    	# And the following survey list should be created:
      #   ---
      # 	 S_Lo_T |surveyName | locationName | timeslotName | remaining
      #    1  | "Survey_1", "Monday Morning", "Coast", 13
      #    2  | "Survey_2", "Monday Morning", "Forest", 13
      #    3  |  "Survey_3", "Monday Morning", "Plains", 13
      #    4  | "Survey_1", "Monday Afernoon", "Coast", 13
      #    5  | "Survey_2", "Monday Afernoon", "Forest", 13
      #    6  | "Survey_3", "Monday Afernoon", "Plains", 13
      #    7  | "Survey_4", "Tuesday Morning", "Coast", 13
      #    8  | "Survey_5", "Tuesday Morning", "Forest", 13
      #    9  | "Survey_3", "Tuesday Morning", "Plains", 13
      #    10 | "Survey_1", "Tuesday Afernoon", "Coast", 13
      #    11 | "Survey_2", "Tuesday Afernoon", "Forest", 13
      #    12 | "Survey_3", "Tuesday Afernoon", "Plains", 13
      #    13 | "Survey_4", "Wednesday Afernoon", "Coast", 13
      #    14 | "Survey_5", "Wednesday Afernoon", "Forest", 13
      #    15 | "Survey_3", "Wednesday Afernoon", "Plains", 13
      #   ---

    	# And the following participant assignments should be created:
      #   ---
      # 	 surveyLocationTimeId | participantFullName | role
      #    "1", "Dan Panek", "Biosecurity"
      #    "1", "Michael Sharman", "Volunteer"
      #    "1", "Nicole Anderson", "Medical Officer"
      #    "2", "Dan Panek", "Biosecurity"
      #    "2", "Michael Sharman", "Volunteer"
      #    "2", "Nicole Anderson", "Medical Officer"
      #    "3", "Dan Panek", "Biosecurity"
      #    "3", "Michael Sharman", "Volunteer"
      #    "3", "Nicole Anderson", "Medical Officer"
      #    "4", "Dan Panek", "Biosecurity"
      #    "4", "Michael Sharman", "Volunteer"
      #    "4", "Nicole Anderson", "Medical Officer"
      #    "5", "Dan Panek", "Biosecurity"
      #    "5", "Michael Sharman", "Volunteer"
      #    "5", "Nicole Anderson", "Medical Officer"
      #    "6", "Dan Panek", "Biosecurity"
      #    "6", "Michael Sharman", "Volunteer"
      #    "6", "Nicole Anderson", "Medical Officer"
      #    "7", "Dan Panek", "Biosecurity"
      #    "7", "Michael Sharman", "Volunteer"
      #    "7", "Nicole Anderson", "Medical Officer"
      #    "8", "Dan Panek", "Biosecurity"
      #    "8", "Michael Sharman", "Volunteer"
      #    "8", "Nicole Anderson", "Medical Officer"
      #    "9", "Dan Panek", "Biosecurity"
      #    "9", "Michael Sharman", "Volunteer"
      #    "9", "Nicole Anderson", "Medical Officer"
      #    "10", "Dan Panek", "Biosecurity"
      #    "10", "Michael Sharman", "Volunteer"
      #    "10", "Nicole Anderson", "Medical Officer"
      #    "11", "Dan Panek", "Biosecurity"
      #    "11", "Michael Sharman", "Volunteer"
      #    "11", "Nicole Anderson", "Medical Officer"
      #    "12", "Dan Panek", "Biosecurity"
      #    "12", "Michael Sharman", "Volunteer"
      #    "12", "Nicole Anderson", "Medical Officer"
      #   ---

    	# And the following accommodation list should be created:
      #   # WOULDBENICE TODO: have this accommodation view/capability > By AccLocation/Day
      #   ---
      # 	 accommodationType | day | participant
      #    Dorm_M1 | Thursday | Michael Sharman
      #    Dorm_M2 | Thursday | Adam Sharman
      #    House | Thursday | Adam Smith
      #    Outside | Friday | Nic Fitzman
      #    Outside | Friday | Daniel Panek
      #    Dorm_F1 | Friday | Jen Web
      #    Dorm_F1 | Friday | Sam Shan
      #    Dorm_F1 | Friday | Amy Deeves
		  #    Dorm_F1 | Friday | Amy Spills
      #   ---
