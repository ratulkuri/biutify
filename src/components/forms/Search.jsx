import { Stack, Form, InputGroup } from 'react-bootstrap'
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";

const
Search = () => {
  return (
    <>
      <Form className='search-form mt-3'>
        <Stack className="search-container" direction='horizontal'>
          <Stack className="input-wrapper" direction='horizontal'>
            <InputGroup>
              <InputGroup.Text>
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                placeholder='tipo di professionista'
                aria-label='tipo di professionista'
              />
            </InputGroup>
            <div className="divider vertical"></div>
            <InputGroup>
              <InputGroup.Text>
                <FaMapMarkerAlt />
              </InputGroup.Text>
              <Form.Control
                placeholder='La città'
                aria-label='La città'
              />
            </InputGroup>

          </Stack>
          <button type='submit' className="search-btn theme-btn rounded d-flex gap-1 align-items-center"><FiSearch /> <span className='d-none d-md-inline'>Search</span></button>
        </Stack>
      </Form>
    </>
  )
}

export default Search