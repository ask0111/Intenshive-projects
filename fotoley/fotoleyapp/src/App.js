import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [isStart, setIsStart] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  var [sIndex, setSIndex] = useState(1);
  let slideIndex = sIndex;
  showSlides(slideIndex);

  function plusSlides(n) {
    // setSlideIndex(slideIndex + n);
    setSIndex(slideIndex + n);
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    // setSlideIndex(n);
    setSIndex(n);
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1;  }
    if (n < 1) { slideIndex = slides.length;  }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1] !== undefined) {
      slides[slideIndex - 1].style.display = "flex";
      dots[slideIndex - 1].className += " active";

    }

  }



  function startInterval() {
    const id = setInterval(() => {
      plusSlides(1);
      setSIndex(slideIndex);
    }, 3000);
    setIntervalId(id);
  };

  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    setSIndex(slideIndex);
    startInterval()
  }, []);


  return (
    <>
      <div className="container" >
        {/* <div className='slidingimg'> */}
          <div className="mySlides">
            <div className='img'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43wDN0j33I98NSoGA_Hm_jgIt1nYVyDWlYw&usqp=CAU" />
            </div>
            <div className='text' >
              <h1>Group of Trees</h1>
              <p>Now is the winter of our discontent
                Made glorious summer by this sun of York;
                And all the clouds that lour'd upon our house
                In the deep bosom of the ocean buried.
                Now are our brows bound with victorious wreaths;
                Our bruised arms hung up for monuments;
                Our stern alarums changed to merry meetings,
                Our dreadful marches to delightful measures.
                Grim-visaged war hath smooth'd his wrinkled front;
                And now, instead of mounting barded steeds
                To fright the souls of fearful adversaries,
                He capers nimbly in a lady's chamber
                To the lascivious pleasing of a lute.
                But I, that am not shaped for sportive tricks,
                Nor made to court an amorous looking-glass;
                I, that am rudely stamp'd, and want love's majesty
                To strut before a wanton ambling nymph;
                I, that am curtail'd of this fair proportion,
              </p>
            </div>
          </div>

          <div className="mySlides">
            <div className='img'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--ezbIfR7wOHrezjEfSvSS1U9HMm_YsqjuA&usqp=CAU" />
            </div>
            <div className='text' >
              <h1>Beautiful Nature</h1>
              <p>Now is the winter of our discontent
                Made glorious summer by this sun of York;
                And all the clouds that lour'd upon our house
                In the deep bosom of the ocean buried.
                Now are our brows bound with victorious wreaths;
                Our bruised arms hung up for monuments;
                Our stern alarums changed to merry meetings,
                Our dreadful marches to delightful measures.
                Grim-visaged war hath smooth'd his wrinkled front;
                And now, instead of mounting barded steeds
                To fright the souls of fearful adversaries,
                He capers nimbly in a lady's chamber
                To the lascivious pleasing of a lute.
                But I, that am not shaped for sportive tricks,
                Nor made to court an amorous looking-glass;
                I, that am rudely stamp'd, and want love's majesty
                To strut before a wanton ambling nymph;
                I, that am curtail'd of this fair proportion,
              </p>
            </div>
          </div>

          <div className="mySlides">
            <div className='img'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&usqp=CAU" />
            </div>
            <div className='text' >
              <h1>Sky</h1>
              <p>Now is the winter of our discontent
                Made glorious summer by this sun of York;
                And all the clouds that lour'd upon our house
                In the deep bosom of the ocean buried.
                Now are our brows bound with victorious wreaths;
                Our bruised arms hung up for monuments;
                Our stern alarums changed to merry meetings,
                Our dreadful marches to delightful measures.
                Grim-visaged war hath smooth'd his wrinkled front;
                And now, instead of mounting barded steeds
                To fright the souls of fearful adversaries,
                He capers nimbly in a lady's chamber
                To the lascivious pleasing of a lute.
                But I, that am not shaped for sportive tricks,
                Nor made to court an amorous looking-glass;
                I, that am rudely stamp'd, and want love's majesty
                To strut before a wanton ambling nymph;
                I, that am curtail'd of this fair proportion,
              </p>
            </div>
          </div>

          <div className="mySlides">
            <div className='img'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaMkoU50bUlyKlxAeFryBhzMe5YLlYjAXlQ&usqp=CAU" />
            </div>
            <div className='text' >
              <h1>Water Fall</h1>
              <p>Now is the winter of our discontent
                Made glorious summer by this sun of York;
                And all the clouds that lour'd upon our house
                In the deep bosom of the ocean buried.
                Now are our brows bound with victorious wreaths;
                Our bruised arms hung up for monuments;
                Our stern alarums changed to merry meetings,
                Our dreadful marches to delightful measures.
                Grim-visaged war hath smooth'd his wrinkled front;
                And now, instead of mounting barded steeds
                To fright the souls of fearful adversaries,
                He capers nimbly in a lady's chamber
                To the lascivious pleasing of a lute.
                But I, that am not shaped for sportive tricks,
                Nor made to court an amorous looking-glass;
                I, that am rudely stamp'd, and want love's majesty
                To strut before a wanton ambling nymph;
                I, that am curtail'd of this fair proportion,
              </p>
            </div>
          </div>

          <div className="mySlides">
            <div className='img'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB6O_lfxeRec_iL5xnCkXpYVSKcbR2ouoMA&usqp=CAU" />
            </div>
            <div className='text' >
              <h1>Natural lake</h1>
              <p>Now is the winter of our discontent
                Made glorious summer by this sun of York;
                And all the clouds that lour'd upon our house
                In the deep bosom of the ocean buried.
                Now are our brows bound with victorious wreaths;
                Our bruised arms hung up for monuments;
                Our stern alarums changed to merry meetings,
                Our dreadful marches to delightful measures.
                Grim-visaged war hath smooth'd his wrinkled front;
                And now, instead of mounting barded steeds
                To fright the souls of fearful adversaries,
                He capers nimbly in a lady's chamber
                To the lascivious pleasing of a lute.
                But I, that am not shaped for sportive tricks,
                Nor made to court an amorous looking-glass;
                I, that am rudely stamp'd, and want love's majesty
                To strut before a wanton ambling nymph;
                I, that am curtail'd of this fair proportion,
              </p>
            </div>
          </div>
        {/* </div> */}

        

        <div className="row">
          <div className='demoimg'>

          <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
       
            <div className="column">
              <img className="demo cursor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43wDN0j33I98NSoGA_Hm_jgIt1nYVyDWlYw&usqp=CAU" style={{ width: "100%" }} onClick={() => currentSlide(1)} alt="The Woods" />
            </div>
            <div className="column">
              <img className="demo cursor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--ezbIfR7wOHrezjEfSvSS1U9HMm_YsqjuA&usqp=CAU" style={{ width: "100%" }} onClick={() => currentSlide(2)} alt="Cinque Terre" />
            </div>
            <div className="column">
              <img className="demo cursor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&usqp=CAU" style={{ width: "100%" }} onClick={() => currentSlide(3)} alt="Mountains and fjords" />
            </div>
            <div className="column">
              <img className="demo cursor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaMkoU50bUlyKlxAeFryBhzMe5YLlYjAXlQ&usqp=CAU" style={{ width: "100%" }} onClick={() => currentSlide(4)} alt="Northern Lights" />
            </div>
            <div className="column">
              <img className="demo cursor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB6O_lfxeRec_iL5xnCkXpYVSKcbR2ouoMA&usqp=CAU" style={{ width: "100%" }} onClick={() => currentSlide(5)} alt="Nature and sunrise" />
            </div>

            <a className="next" onClick={() => plusSlides(1)}>❯</a>

          </div>
          <div className='sstopbutn'>

            {isStart ? <img onClick={() => { setIsStart(!isStart); stopInterval() }} width="48" height="48" src="https://img.icons8.com/color/48/circled-pause.png" alt="circled-pause" /> : <img onClick={() => { setIsStart(!isStart); startInterval() }} width="48" height="48" src="https://img.icons8.com/color/48/circled-play--v1.png" alt="circled-play--v1" />}
          </div>
        </div>
      </div>



    </>
  );
}

export default App;
