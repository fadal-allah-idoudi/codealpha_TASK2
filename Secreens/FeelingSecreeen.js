import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import FeelingButton from '../comps/FeelingButton';
import { LinearGradient } from 'expo-linear-gradient';
function FeelingScreen({ navigation }) {

    function renderHandler(itemData) {
        return (
            <FeelingButton 
                clicked={() => {
                    navigation.navigate('Quotes', {
                        DATA: itemData.item.quotes,
                        color:itemData.item.color,
                        color2:itemData.item.color2,
                        color0:itemData.item.color0,

                    });
                }}
                feeling={itemData.item.feeling} 
                color={itemData.item.color} 
                animation={itemData.item.animation} 
            />
        );
    }

    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}  // Example gradient colors
            style={styles.gradient}
        >
            <FlatList 
                data={DATA} 
                renderItem={renderHandler}
                numColumns={2} 
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.container}
            />
        </LinearGradient>
    );
}

export default FeelingScreen;

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        padding: 16,
    },
});
  const DATA = [
        {
            id: 1,
            feeling: "Happiness",
            color: '#f5d142',
            color0: '#f6f0db',
            color2: '#d5ac05',
            animation: require('../assets/animation/AnimationHappy.json'),
            quotes: [
        " Happiness shared is happiness doubled",
        "True happiness can be found in the tiniest of things",
       " Choose life, choose happiness, and make someone smile",
       " Our days are happier when we give people a bit of our hearts",
       " Happiness is free, but priceless",
        "The happiest people don’t have the best of everything – they just make the best of everything",
        "Be happy – not because everything is good, but because you see the good in everything",
        "Happiness is a journey, not a destination",
        "Don’t let the silly little things steal your happiness",
        "Happiness is not about getting all you want – it’s about enjoying all you have",
            ]
        }, {
            id: 2,
            feeling: "Sadness",
            color0: '#f4e0c7',
            color: '#f48600',
            color2: '#4f2c00',
            animation: require('../assets/animation/AnimationSad.json'),
            quotes: [
                "The deeper that sorrow carves into your being, the more joy you can contain",
                "Make the most of your regrets; never smother your sorrow, but tend and cherish it till it comes to have a separate and integral interest. To regret deeply is to live afresh",
                "What is hardest to accept about the passage of time is that the people who once mattered the most to us wind up in parentheses",
                "Words are tears that have been written down. Tears are words that need to be shed. Without them, joy loses all its brilliance and sadness has no end",
                "When you’re happy, you enjoy the music but when you’re sad, you understand the lyrics",
                "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water",
                "A wound that goes unacknowledged and unwept is a wound that cannot heal",
                "Crying is cleansing. There’s a reason for tears, happiness or sadness.",
                "Those who do not weep, do not see",
                "We all yearn for what we have lost. But sometimes, we forget what we have.",
                "Songs are as sad as the listener",
                "For all sad words of tongue and pen, The saddest are these, ‘It might have been",
                "It’s sad, something coming to an end. It cracks you open, in a way — cracks you open to feeling. When you try to avoid the pain, it creates greater pain",
            ]   
        }, {
            id: 3,
            feeling: "Scared",
            color: '#9eecff',
            color0: '#9ccedc',
            color2: '#0bceff',
            animation: require('../assets/animation/Animationscared.json'),
            quotes: [
                "Each of us must confront our own fears, must come face to face with them. How we handle our fears will determine where we go with the rest of our lives. To experience adventure or to be limited by the fear of it",
                "Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy",
                "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I have lived through this horror. I can take the next thing that comes along.’ You must do the thing you think you cannot do",
                "Fear is the path to the Dark Side. Fear leads to anger, anger leads to hate, hate leads to suffering",
                "The brave man is not he who does not feel afraid, but he who conquers that fear.",
                "Nothing in life is to be feared. It is only to be understood",
                "Decide that you want it more than you are afraid of it",
                "The key to change… is to let go of fear",
                "He who is not everyday conquering some fear has not learned the secret of life",
                "We should all start to live before we get too old. Fear is stupid. So are regrets",
                "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold",
                "One of the greatest discoveries a man makes, one of his great surprises, is to find he can do what he was afraid he couldn’t do.",
                "Don’t let the fear of striking out hold you back",
            ]
        }, {
            id: 4,
            feeling: "Anger",
            color: '#f5428d',
            color0: '#eecedb',
            color2: '#4a001f',
            animation: require('../assets/animation/animationmad.json'),
            quotes: [
                "For every minute you remain angry, you give up sixty seconds of peace of mind",
                "Anger, if not restrained, is frequently more hurtful to us than the injury that provokes it",
                "People who fly into a rage always make a bad landing",
                "If you find yourself in a hole, stop digging",
                "Speak when you are angry and you will make the best speech you will ever regret",
                "How much more grievous are the consequences of anger than the causes of it",
                "No man can think clearly when his fists are clenched",
                "There was never an angry man that thought his anger unjust",
                "If you are patient in one moment of anger, you will escape a hundred days of sorrow",
                "If a small thing has the power to make you angry, does that not indicate something about your size?",
                "He who angers you conquers you.",
                "Anger is one letter short of danger. ",
                "If you kick a stone in anger, you’ll hurt your own foot",
                "Resentment is like taking poison and waiting for the other person to die.",
                "Anger dwells only in the bosom of fools.",
                "Anger is short-lived madness. ",
                "Anger blows out the lamp of the mind.",
                "To carry a grudge is like being stung to death by one bee",
            ]
        }, {
            id: 5,
            feeling: "Surprise",
            color: '#47fced',
            color0: '#cefffb',
            color2: '#00776d',
            animation: require('../assets/animation/surprised.json'),
            quotes: [
                "The best part of the journey is the surprise and wonder along the way",
                "Life is full of surprises, but the biggest one of all is learning what it takes to handle them",
                "Surprise, unpredictability: these are the main materials of creativity",
                "One of the greatest discoveries a man makes, one of his great surprises, is to find he can do what he was afraid he couldn't do.",
                "There is no surprise more magical than the surprise of being loved: It is God's finger on man's shoulder.",
                "Surprise is the greatest gift which life can grant us",
                "Time changes everything except something within us which is always surprised by change",
                "If you weren't surprised by your life you wouldn't be alive. Life is surprise.",
                "The secret to humor is surprise.",
                "Mystery is at the heart of creativity. That, and surprise.",
                "Doing the right thing is fun. If nothing else, it surprises people.",
            ]
        }, {
            id: 6,
            feeling: 'Annoyed',
            color: '#41d95d',
            color0: '#c0f6ca',
            color2: '#00eb2b',
            animation: require('../assets/animation/annoyedanimation.json'),
            quotes: [
                `People have an annoying habit of remembering things they shouldn’t`,
                `Being an annoyance is something that I am very good at. In fact, I’m far more than just a ‘mild’ annoyance--people tell me I can be downright frustrating. Might as well use this talent for the cause of good, eh?`,
                `John Wesley kicked the back of the front seat and June Star hung over her mother’s shoulder and whined desperately into her ear that they never had any fun even on their vacation, that they could never do what THEY wanted to do.`,
                `Our worst fault is our preoccupation with the faults of others.`,
                `Puddleglum’s question annoyed her because, deep down inside her, she was already annoyed with herself for not knowing the Lion’s lesson quite so well as she felt she ought to have known it. This annoyance, added to the misery of being very cold and tired, made her say, ‘Bother the signs.’ She didn’t perhaps quite mean it.`,
                `Reacting in anger or annoyance will not advance one's ability to persuade`,
                `Not only is our love for our children sometimes tinged with annoyance, discouragement, and disappointment, the same is true for the love our children feel for us`,
                `When one is young, aspiring to play for the country, doing well, any hindrance, like injury or being out of form, can be frustrating and a cause of annoyance or even anger. But once you have a close encounter with death, you realise the real value of life.`,
                `Few things are harder to put up with than the annoyance of a good example.`,

            ]
        },
    ];