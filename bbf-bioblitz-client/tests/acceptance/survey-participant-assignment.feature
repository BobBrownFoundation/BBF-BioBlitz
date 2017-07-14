Feature: Survey Participant Assignment
    As an admin I want to assign participants to the survey time slot.
    Resourcing constraints should be abided by.

    Background:
    	Given there are the following locations:
      ---
    	 name    | description
    	 Forests | The forest survey site
    	 Plains  | The plains survey site
    	 Coast   | The coast survey site
      ---

      And there are the following timeslots:
      ---
    	 name              | start 	           | duration
    	 Monday Morning    | 20/11 2017 9:00 am | 240
       Monday Afternoon  | 20/11 2017 1pm     | 240
       Monday Night      | 20/11 2017 6pm     | 240
    	 Tuesday Morning   | 21/11 2017 1:00 pm | 240
       Tuesday Afternoon | 21/11 2017 4:00pm  | 240
      ---

    	And there are the following participants:
      ---
    	 name            | team
       Dan Paneek      | Organisers
       Michael Sharman | Volunteers
      ---

    	And there are the following surveys:
      ---
    	 name   | timeslot       | location | participants
    	 Birds  | Monday Morning | Forest   | "Michael Sharman", "Dan Paneek"
      ---

    Scenario: Displaying a survey list
    	When I view the survey page
    	Then a table showing the list of survey timeslots is displayed:
      ---
    	 id| date 		           | duration | location | remaining | available
    	 1 | 20/11 2017 9:00 am |  	      |          |           |
      ---

    Scenario: Display surveys filtered by date and timeslot
    	Given the table of surveys is displayed
    	When I select the <<filter>>
    	Then then only the <<results>> are displayed

    	Where:
    		filters              |  results
    		Monday               |
    		Morning              |
        Forest, AM           |
    		Plains, PM           |
    		Night, Coast, Plains |
