Teams Import:
Team, Description

Sites Import:
"Location", "Description"

Timeslots Import:
name is string, start is date, duration is number
(leave out start and duration if you want; they aren't that important)
"Timeslot:name", "Start", "Duration"

Survey Import:
"Survey", "Description"

Survey to Timeslot:
"Surveyslot:Survey:name", "Surveyslot:Timeslot:name", "Surveyslot:Location:name", "NumberOfParticipants"

Participants Import

name (first) ==> Person:FirstName
name (last)  ==> Person:LastName
team         ==> Team:name

Participants to survey/timeslot/site:

"Participant:Surveyslot:Survey:name", "Participant:Surveyslot:Timeslot:name", "Participant:Surveyslot:Location:name","Participant:Person:name"
