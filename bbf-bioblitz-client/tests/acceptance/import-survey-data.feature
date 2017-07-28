Feature: Import Survey data via spreadsheets
    As an admin I want to be able to import the various survey, and location
    data via uploading one or more spreadsheets.

        # comments (fields = applyCamelCaseThroughOut
        # comments entity = ApplyCamelCaseThroughOut

    Scenario: Import survey data
    	When I import the following spreadsheet:
        # comments (s/s name= Team )
		---
      	 "Team", "Description"
      	 "Survey Leaders", "Leads a group of participants in a survey"
      	 "Organisers", "Part of team that organises BioBlitz event"
      	 "Volunteers", "General volunteer"
        ---

    	And I import the following spreadsheet:
        # comments (s/s name= Role )
		---
      	 "Role", "Description"
      	 "Survey Leader", "Leads survey"
      	 "Survey Co-lead", "2nd survey leader"
      	 "First Aid Officer", "meets criteria for first aid"
      	 "Driver", "Drives a transport vehicle"
      	 "Kitchen Help", "Helps in the kitchen"
        ---

    	And I import the following spreadsheet:
        # comments (s/s name= Survey )
        # comments Note: survey names need to be unique - e.g. even if Birds01; Birds 02 etc
        # comments (NF to provide - what other specs does he have?)
        ---
      	 "Survey", "Description"
      	 "Birds", "Bird watching"
        ---

    	And I import the following spreadsheet:
        # comments (s/s name= Timeslot)
        # comments (create/enter actual values/dates
        ---
      	 "TimeslotName", "Start", "Duration (mins)"
      	 "Monday Morning", "20/11/2017 9:00:00", "240"
        ---

    	And I import the following spreadsheet:
        # comments (s/s name= "Participant" )
        # comments (s/s name= MS consider how  gravity forms  handle IDs - numeric?)
        ---
      	 "ID", "ParticipantName", "Teams", "Capable Roles"
      	 "001", "Michael Sharman", "Organiser", "Volunteer, Kitchen Hand"
        ---

      And I import the following spreadsheet:
        # comments (s/s name= "Location", )
        ---
      	 "LocationName", "Description"
         "Forests", "The forest survey site"
      	 "Plains",  "The plains survey site"
      	 "Coast",   "The coast survey site"
        ---

      And I import the following spreadsheet:
        # comments (s/s name= S_Lo_TName)
        ---
      	 "S_Lo_T", "TimeslotName", "LocationName", "NumberOfParticpants"
      	 "Birds", "Monday Morning", "Coast", 16
        ---

    	And I import the following spreadsheet:
        # comments (s/s name= S_Lo_TParticipants)
        # comments (future wishlist - show required roles which are not yet filled.E.g. SurveyAssistant, FirstAid, Driver, Biosecurity
        ---
      	 "Survey", "TimeslotName", "LocationName", "ParticipantName", "Role"
      	 "Birds", "Monday Morning", "Coast", "Michael Sharman", "Biosecurity"
        ---

      And I import the following spreadsheet:
        # comments (s/s name= Transport)
        # comments (consider if vehicles have special driver requirements e.g. only Jen can Drive Bus_3?
        ---
      	 "VehicleName", "SeatsNumber"
         "Bus_1", "12"
         "Bus_2", "8"
         "Bus_3", "8"
        ---

    	Then the following surveys should be created:
        # comments (View 1 = Surveys that are available
        ---
      	 surveyName | description
	 Survey_1 | This is a decription of Survey_1
	 Survey_2 | This is a decription of Survey_2
	 Survey_3 | This is a decription of Survey_3
        ---

    	And the following survey list should be created:
        # comments (View 2 = Shows an overview of all SurveysSLoTs and which SurveySLoTs still have places remaining available
        # comments (ideally with interface link button to edit SurveySLoT participants list
        ---
      	 surveyName | locationName | timeslotName | remaining
      	 Survey_1 | Coast | Monday Morning | 5
      	 Survey_2 | Plains | Tuesday Morning | 0
      	 Survey_3 | Coast | Tuesday Morning | 2
      	 Survey_4 | Forest | Tuesday Night | 0
      	 Survey_5 | Forest | Monday Dawn | 3
        ---

    	And the following participant assignments should be created:
        # comments (View 3 = Shows a list of all SurveysSLoTs, the participants on them and roles selected
        # comments (Final user interface will show this table, allow filter on columns and (if poss.) click on table cell data items to go to that record
        # comments (e.g.1 I click on SurveySlot1 and see a list of the particpants on it
        # comments (e.g.2 I click on a particpants and see a list of the surveyslots they are on
        # TODO: comments (create an ID to replace 3way combined key S-Lo-T
        ---
      	 survey | location | timeslot | participant | role
      	 Survey_1 | Coast | Monday Morning | Michael Sharman | Driver
      	 Survey_1 | Coast | Monday Morning | Michael Sharman | Driver
      	 Survey_1 | Coast | Monday Morning | Michael Sharman | Driver
      	 Survey_1 | Coast | Monday Morning | Michael Sharman | Driver
      	 Survey_2 | Plains | Tuesday Morning | 0
      	 Survey_3 | Coast | Tuesday Morning | 2
      	 Survey_4 | Forest | Tuesday Night | 0
      	 Survey_5 | Forest | Monday Dawn | 3
        ---

    	# And the following transport list should be created:
        # WOULDBENICE TODO: have this transport view/capability > By Lo_T (Location AND Timeslot
        ---
      	 vehicleName | participantName | role
         Bus_1 | Michael Sharman | Not Driver
         Bus_1 | Adam Sharman | Not Driver
         Bus_1 | Adam Smith| Not Driver
         Bus_1 | Nic Fitzman | Driver
         Bus_2 | Daniel Panek | Driver
         Bus_2 | Jen Web | Not Driver
         Bus_2 | Sam Shan | Not Driver
         Bus_2 | Amy Deeves| Not Driver
        ---

    	And the following accommodation list should be created:
        # WOULDBENICE TODO: have this accommodation view/capability > By AccLocation/Day
        ---
      	 accommodationType | day | participant
         Dorm_M1 | Thursday | Michael Sharman
         Dorm_M2 | Thursday | Adam Sharman
         House | Thursday | Adam Smith
         Outside | Friday | Nic Fitzman
         Outside | Friday | Daniel Panek
         Dorm_F1 | Friday | Jen Web
         Dorm_F1 | Friday | Sam Shan
         Dorm_F1 | Friday | Amy Deeves
		 Dorm_F1 | Friday | Amy Spills
        ---
















