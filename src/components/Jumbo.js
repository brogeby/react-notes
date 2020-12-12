import {useContext} from 'react'

//Import Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

//Import Others
import {LanguageContext} from '../context/LanguageContext'

export default function Jumbo() {
  const lang = useContext(LanguageContext)

  return (
    <Row>
      <Col>
        <Jumbotron style={{textAlign: 'center'}} fluid lang="en">
          <h1>{lang['header']}</h1>
        </Jumbotron>
      </Col>
    </Row>
  )
}
