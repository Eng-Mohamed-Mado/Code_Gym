import React,{useEffect,useState} from 'react'
// Import Router
import {useParams} from 'react-router-dom'
// import  Material Ui
import {Box} from '@mui/material'

// import APi 
import {exerciseOptions,fetchData,youtubeOptions} from '../utils/fetchData'
// Components 
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
const ExerciseDetail = () => {
  // Save Data 
  const [exerciseDetail,setExerciseDetail]=useState({});
  const [exerciseVideos,setExerciseVideos] =useState([]);
  const [targetMuscleExercises,setTargetMuscleExercises] =useState([])
  const [equipmentExercises,setEquipmentExercises]=useState([])

  // Get Id Parameter 
  const {id} =useParams();

  // APi
  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      // Test 
      // console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions) 
      setTargetMuscleExercises(targetMuscleExercisesData)
      
      const eqipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions) 
      setEquipmentExercises(eqipmentExercisesData)
    } 
    fetchExercisesData()
  },[id])

  return (
    <Box >
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/> 
    </Box>
  )
}

export default ExerciseDetail
