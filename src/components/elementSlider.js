import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import VapeElement from './vapeElement'
import './elementSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
 
class ElementSlider extends React.Component {
  items = [<VapeElement/>, <VapeElement/>, <VapeElement/>, <VapeElement/>, <VapeElement/>,<VapeElement/>,<VapeElement/>,
    <VapeElement/>,<VapeElement/>,<VapeElement/>]
 
  state = {
    currentIndex: 0,
    responsive: {
      0: {
          items: 1
      },
      1200: {
          items: 4
      },
      800: {
        items: 2
      },
      1800: {
        items: 5
      }
  },
    galleryItems: this.galleryItems(),
  }

  stagePadding = {
    paddingLeft: 100,
    paddingRight: 0
  }
 
  slideTo = (i) => this.setState({ currentIndex: i })
 
  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
 
  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
 
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
 
  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>
 
  galleryItems() {
    return this.items.map((i) => <h2 key={i}> {i}</h2>)
  }
 
  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
      <div id="carousel">
        <h2 id="heading">Today's Hot Deals</h2>
        <AliceCarousel
          dotsDisabled={true}
          infinite={false}
          fadeOutAnimation={true}
          buttonsDisabled={true}
          items={galleryItems}
          stagePadding={this.stagePadding}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />
        <button id="pbtn" onClick={() => this.slidePrev()}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button id="nbtn" onClick={() => this.slideNext()}><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
    )
  }
}

export default ElementSlider;