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
        ---

      And I import the following spreadsheet:
        ---
      	 "Person:Id", "FirstName", "LastName", "Teams", "Capable Roles"
      	 "1", "Michael", "Sharman", "Organiser", "Volunteer, Kitchen Hand"
         "2", "Dan", "Panek", "Organiser", "Volunteer, Kitchen Hand, Bio Security"
         "3", "Nicole", "Anderson", "Organiser", "Medical Officer, Kitchen Hand, Bio Security"
         "4", "Craig", "Broadfield", "Survey Leaders", "Survey Leader"
        ---

    	And I import the following spreadsheet:
        ---
      	 "Survey", "Description"
      	 "Survey_1", "Survey 1 description"
         "Survey_2", "Survey 2 description"
         "Survey_3", "Survey 3 description"
         "Survey_4", "Survey 4 description"
         "Survey_5", "Survey 5 description"
        ---

    	And I import the following spreadsheet:
        ---
      	 "Timeslot", "Start", "Duration"
         "Monday Dawn", "20/11/2017 6:00", "180"
      	 "Monday Morning", "20/11/2017 9:00:00", "240"
         "Monday Afternoon", "20/11/2017 13:00:00", "240"
         "Monday Evening", "20/11/2017 19:00:00", "240"
         "Tuesday Dawn", "21/11/2017 6:00", "180"
      	 "Tuesday Morning", "21/11/2017 9:00:00", "240"
         "Tuesday Afternoon", "21/11/2017 13:00:00", "240"
         "Tuesday Evening", "21/11/2017 19:00:00", "240"
         "Wednesday Dawn", "21/11/2017 6:00", "180"
      	 "Wednesday Morning", "21/11/2017 9:00:00", "240"
         "Wednesday Afternoon", "21/11/2017 13:00:00", "240"
         "Wednesday Evening", "21/11/2017 19:00:00", "240"
         "Thursday Dawn", "21/11/2017 6:00", "180"
      	 "Thursday Morning", "21/11/2017 9:00:00", "240"
        ---

      And I import the following spreadsheet:
        ---
      	 "Location", "Description"
         "Forests", "The forest survey site"
      	 "Plains",  "The plains survey site"
      	 "Coast",   "The coast survey site"
        ---

      And I import the following spreadsheet:
        ---
      	 "SurveySlot:Id", "Survey:name", "Timeslot:name", "Location:name", "NumberOfParticipants"
      	 "1", "Survey_1", "Monday Morning", "Coast", 16
         "2", "Survey_2", "Monday Morning", "Forest", 16
         "3", "Survey_3", "Monday Morning", "Plains", 16
         "4", "Survey_1", "Monday Afernoon", "Coast", 16
         "5", "Survey_2", "Monday Afernoon", "Forest", 16
         "6", "Survey_3", "Monday Afernoon", "Plains", 16
         "7", "Survey_4", "Tuesday Morning", "Coast", 16
         "8", "Survey_5", "Tuesday Morning", "Forest", 16
         "9", "Survey_3", "Tuesday Morning", "Plains", 16
         "7", "Survey_1", "Tuesday Afernoon", "Coast", 16
         "8", "Survey_2", "Tuesday Afernoon", "Forest", 16
         "9", "Survey_3", "Tuesday Afernoon", "Plains", 16
         "10", "Survey_4", "Wednesday Afernoon", "Coast", 16
         "11", "Surey_5", "Wednesday Afernoon", "Forest", 16
         "12", "Survey_3", "Wednesday Afernoon", "Plains", 16
        ---

    	And I import the following spreadsheet:
        ---
      	 "S_Lo_T", "ParticipantId", "Role"
      	 "1", "2", "Biosecurity"
         "1", "1", "Volunteer"
         "1", "3", "Medical Officer"
         "2", "2", "Biosecurity"
         "2", "1", "Volunteer"
         "2", "3", "Medical Officer"
         "3", "2", "Biosecurity"
         "3", "1", "Volunteer"
         "3", "3", "Medical Officer"
         "4", "2", "Biosecurity"
         "4", "1", "Volunteer"
         "4", "3", "Medical Officer"
         "5", "2", "Biosecurity"
         "5", "1", "Volunteer"
         "5", "3", "Medical Officer"
         "6", "2", "Biosecurity"
         "6", "1", "Volunteer"
         "6", "3", "Medical Officer"
         "7", "2", "Biosecurity"
         "7", "1", "Volunteer"
         "7", "3", "Medical Officer"
         "8", "2", "Biosecurity"
         "8", "1", "Volunteer"
         "8", "3", "Medical Officer"
         "9", "2", "Biosecurity"
         "9", "1", "Volunteer"
         "9", "3", "Medical Officer"
         "10", "2", "Biosecurity"
         "10", "1", "Volunteer"
         "10", "3", "Medical Officer"
         "11", "2", "Biosecurity"
         "11", "1", "Volunteer"
         "11", "3", "Medical Officer"
         "12", "2", "Biosecurity"
         "12", "1", "Volunteer"
         "12", "3", "Medical Officer"
        ---

    	Then the following surveys should be created:
        ---
      	 surveyName | description
         "Survey_1", "Survey 1 description"
         "Survey_2", "Survey 2 description"
         "Survey_3", "Survey 3 description"
         "Survey_4", "Survey 4 description"
         "Survey_5", "Survey 5 description"
        ---

    	And the following survey list should be created:
        ---
      	 S_Lo_T |surveyName | locationName | timeslotName | remaining
         1  | "Survey_1", "Monday Morning", "Coast", 13
         2  | "Survey_2", "Monday Morning", "Forest", 13
         3  |  "Survey_3", "Monday Morning", "Plains", 13
         4  | "Survey_1", "Monday Afernoon", "Coast", 13
         5  | "Survey_2", "Monday Afernoon", "Forest", 13
         6  | "Survey_3", "Monday Afernoon", "Plains", 13
         7  | "Survey_4", "Tuesday Morning", "Coast", 13
         8  | "Survey_5", "Tuesday Morning", "Forest", 13
         9  | "Survey_3", "Tuesday Morning", "Plains", 13
         10 | "Survey_1", "Tuesday Afernoon", "Coast", 13
         11 | "Survey_2", "Tuesday Afernoon", "Forest", 13
         12 | "Survey_3", "Tuesday Afernoon", "Plains", 13
         13 | "Survey_4", "Wednesday Afernoon", "Coast", 13
         14 | "Survey_5", "Wednesday Afernoon", "Forest", 13
         15 | "Survey_3", "Wednesday Afernoon", "Plains", 13
        ---

    	And the following participant assignments should be created:
        ---
      	 surveyLocationTimeId | participantFullName | role
         "1", "Dan Panek", "Biosecurity"
         "1", "Michael Sharman", "Volunteer"
         "1", "Nicole Anderson", "Medical Officer"
         "2", "Dan Panek", "Biosecurity"
         "2", "Michael Sharman", "Volunteer"
         "2", "Nicole Anderson", "Medical Officer"
         "3", "Dan Panek", "Biosecurity"
         "3", "Michael Sharman", "Volunteer"
         "3", "Nicole Anderson", "Medical Officer"
         "4", "Dan Panek", "Biosecurity"
         "4", "Michael Sharman", "Volunteer"
         "4", "Nicole Anderson", "Medical Officer"
         "5", "Dan Panek", "Biosecurity"
         "5", "Michael Sharman", "Volunteer"
         "5", "Nicole Anderson", "Medical Officer"
         "6", "Dan Panek", "Biosecurity"
         "6", "Michael Sharman", "Volunteer"
         "6", "Nicole Anderson", "Medical Officer"
         "7", "Dan Panek", "Biosecurity"
         "7", "Michael Sharman", "Volunteer"
         "7", "Nicole Anderson", "Medical Officer"
         "8", "Dan Panek", "Biosecurity"
         "8", "Michael Sharman", "Volunteer"
         "8", "Nicole Anderson", "Medical Officer"
         "9", "Dan Panek", "Biosecurity"
         "9", "Michael Sharman", "Volunteer"
         "9", "Nicole Anderson", "Medical Officer"
         "10", "Dan Panek", "Biosecurity"
         "10", "Michael Sharman", "Volunteer"
         "10", "Nicole Anderson", "Medical Officer"
         "11", "Dan Panek", "Biosecurity"
         "11", "Michael Sharman", "Volunteer"
         "11", "Nicole Anderson", "Medical Officer"
         "12", "Dan Panek", "Biosecurity"
         "12", "Michael Sharman", "Volunteer"
         "12", "Nicole Anderson", "Medical Officer"
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
