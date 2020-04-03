enum ScreenState {
  Loading = "LOADING",
  Home = "HOME",
  HostRoom = "HOST_ROOM",
  HostWait = "HOST_WAIT",
  HostSettings = "HOST_SETTINGS",
  ParticipantRoom = "PARTICIPANT_ROOM",
  ParticipantWait = "PARTICIPANT_WAIT",
  PrePrompt = "PREPROMPT",
  FakerQuestion = "FAKER_QUESTION",
  PlayerQuestion = "PLAYER_QUESTION",
  Vote = "VOTE",
  VoteWait = "VOTE_WAIT",
  Results = "RESULTS",
  Leaderboard = "LEADERBOARD"
}

interface Game {
  screenState: ScreenState;
  players: string[];
}
