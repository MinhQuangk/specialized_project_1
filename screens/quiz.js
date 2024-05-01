import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity,View } from "react-native";
import Result from "./results";


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
const Quiz = ({navigation}) =>{
  const[questions,setQuestions]=useState();
  const[ques,setQues]=useState(0);
  const[options,setOptions]=useState([]);
  const[score,setScore]=useState(0);
  const[isLoading,setIsLoading]=useState(false)

  const getQuiz = async () =>{
    setIsLoading(true)
    const url ='https://opentdb.com/api.php?amount=20&category=31&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionAndShuffle(data.results[0]))
    setIsLoading(false)
  };
    useEffect(()=>{
      getQuiz();
    },[]);

    const handleNextPress=()=>{
      setQues(ques+1)
      setOptions(generateOptionAndShuffle(questions[ques + 1]));
    }
    const generateOptionAndShuffle = (_question) => {
      const options = [
        ..._question.incorrect_answers,
        _question.correct_answer
      ];
      shuffleArray(options);
      return options;
    };
    const handleSelectOption = (_option)=>{
        if(_option===questions[ques].correct_answer){
          setScore(score+0.5)
        }
        if(ques!==19){
          setQues(ques+1)
        setOptions(generateOptionAndShuffle(questions[ques + 1]));
        }
        if(ques===19){
          handleShowResult()
        }
        console.log(_option===questions[ques].correct_answer)
    }
    const handleShowResult=()=>{
      navigation.navigate('Result',{score:score})
    }
  return(
    <View style = {styles.container}>
      {isLoading ?<View style = {styles.loading}>
        <Text style = {styles.textLoading}>LOADING....</Text>
        </View> :
        questions&&
      <View style = {styles.parents}>
      <View style = {styles.top}>
          <Text style = {styles.question}>Q{ques + 1}.{decodeURIComponent(questions[ques].question)}</Text>
      </View>
      <View style = {styles.options}>
        <TouchableOpacity style = {styles.optionButton} onPress={()=>handleSelectOption(options[0])}>
          <Text style = {styles.option}>A.{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.optionButton} onPress={()=>handleSelectOption(options[1])}>
          <Text style = {styles.option}>B.{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.optionButton} onPress={()=>handleSelectOption(options[2])}>
          <Text style = {styles.option}>C.{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.optionButton} onPress={()=>handleSelectOption(options[3])}> 
          <Text style = {styles.option}>D.{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.bottom}>
        {/* <TouchableOpacity style = {styles.button} >
          <Text style = {styles.buttonText}>Back</Text>
        </TouchableOpacity> */}
        {ques!==19 && 
        <TouchableOpacity style = {styles.button} onPress={handleNextPress}>
          <Text style = {styles.buttonText}>Next</Text>
        </TouchableOpacity>
        }
        {ques==19 &&  <TouchableOpacity style = {styles.button} onPress={handleShowResult}>
          <Text style = {styles.buttonText} >ShowResult</Text>
        </TouchableOpacity> }
      </View>
      </View>
      }
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    padding : 40 ,
    paddingHorizontal: 20,
    height: '100%'
  },
  top:{
    marginVertical: 16,
  },
  options:{
    marginVertical: 16,
    flex :1 ,
  },
  bottom:{
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button:{
    backgroundColor:'#1A759F',
    padding : 12 ,
    paddingHorizontal :16,
    borderRadius : 16 ,
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 18 ,
    fontWeight: '600',
    color : 'white'
  },
  question:{
    fontSize: 28,
  },
  option:{
    fontSize: 18,
    fontWeight : '500',
    color: 'white'
  },
  optionButton:{
    paddingVertical:12,
    marginVertical:6,
    backgroundColor:'#34A0A4',
    paddingHorizontal: 12 ,
    borderRadius: 12 ,
  },
  parents:{
    height:'100%'
  },
  loading:{
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%'
  },
  textLoading:{
    fontSize:30,
    fontWeight:'700'
  }
})