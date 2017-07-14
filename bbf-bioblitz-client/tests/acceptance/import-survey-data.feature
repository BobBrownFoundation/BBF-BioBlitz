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
        ---

    	And I import the following spreadsheet:
        ---
      	 "Survey", "Description"
      	 "Birds", "Bird watching"
        ---

    	And I import the following spreadsheet:
        ---
      	 "Timeslot", "Start", "Duration (mins)"
      	 "Monday Morning", "20/11/2017 9:00:00", "240"
        ---

    	And I import the following spreadsheet:
        ---
      	 "Participant", "Teams", "Capable Roles"
      	 "Michael Sharman", "Organiser", "Volunteer, Kitchen Hand"
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
      	 "Survey","Description", "Timeslot", "Locations", "Slots"
      	 "Birds", "Description", "Monday Morning", "Plains, Forest, Coast", 16
        ---

    	And I import the following spreadsheet:
        ---
      	 "Survey", "Timeslot", "Location", "Participant", "Role"
      	 "Birds", "Monday Morning", "Coast", "Michael Sharman", ""
        ---

    	Then the following surveys should be created:
        ---
      	 name | description
        ---

    	And the following survey list should be created:
        ---
      	 survey | location | remaining
        ---

    	And the following participant assignments should be created:
        ---
      	 survey | location | participant | role
        ---
