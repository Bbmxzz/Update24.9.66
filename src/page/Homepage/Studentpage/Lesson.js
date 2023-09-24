import React from 'react';
import { useState } from 'react';
import "./styles2.css";
import List from '../../../components/List';



const Lesson = props => {
    const [selectedVideoLink, setSelectedVideoLink] = useState(null);
    const lesson = [
        {
          id: 'a',
          name: 'Lesson1',
          link: 'https://firebasestorage.googleapis.com/v0/b/circuit-dbd51.appspot.com/o/lesson%2FMVI_4228.MOV?alt=media&token=7ee71988-51ed-41bb-82d6-c5278e61164e'
        },
        {
          id: 'b',
          name: 'Lesson2',
          link: 'https://firebasestorage.googleapis.com/v0/b/circuit-dbd51.appspot.com/o/lesson%2FMVI_4227.MOV?alt=media&token=6d88b247-bbd7-4b72-9097-a4598d8cb3c7'
        }
    ];
    const handlechange = (index) => {
        setSelectedVideoLink(index.link);
        console.log(selectedVideoLink)
    };
    const VideoPlayer = ({ link }) => {
        return (
          <video width="750" height="500" controls>
            <source src={link} />
          </video>
        );
      };

    return (
        <div> <br/><br/>&emsp;&emsp;&emsp;&emsp;{selectedVideoLink && <VideoPlayer link={selectedVideoLink} />}
        {lesson.map((unit, index) => {
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        width: '200px',
                        margin: '20px',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                    }}
                    onClick={() => {handlechange(unit);}}
                    key={index}>
                    <List key={unit} name={unit.name} link={unit.link}/>

                </div>
            );
        })}
        </div>
  );
};
export default Lesson