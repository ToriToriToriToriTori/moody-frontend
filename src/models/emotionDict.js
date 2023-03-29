import { Smiley, SmileyAngry, SmileyNervous, SmileyMeh, SmileySad, SmileyWink} from "@phosphor-icons/react";

export const EMOTIONS = {
    HAPPY: <Smiley />,
    NORMAL: <SmileyMeh/>,
    PLAYFUL: <SmileyWink/>,
    SAD: <SmileySad />,
    ANGRY: <SmileyAngry />,
    NERVOUS: <SmileyNervous/>
  };


export const DAMMY_emotions = [
    {id: 1, emotion: EMOTIONS.HAPPY, reason: 'Робота', description: 'Some text with description'},
    {id: 2, emotion: EMOTIONS.NERVOUS, reason: 'Навчання', description: 'Some text with description'},
    {id: 3, emotion: EMOTIONS.SAD, reason: 'Навчання', description: 'Some text with description'},
    {id: 4, emotion: EMOTIONS.ANGRY, reason: 'Інше', description: 'Some text with description'}
  ]; 
