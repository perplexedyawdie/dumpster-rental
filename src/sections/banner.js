/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Text,
  Label,
  Button,
  Select,
  Heading,
  Container,
} from 'theme-ui';
import { useState } from 'react';
import { rgba } from 'polished';
import Image from 'components/image';
import serverRack from 'assets/images/banner-img.png';
import { Button as ButtonAntd } from 'antd';
import { Row, Col, Divider } from 'antd';
import { DatePicker, Space } from 'antd';
import { Slider, InputNumber } from 'antd';
import { Input } from 'antd';
import { AiOutlineMail } from 'react-icons/ai'
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const tlds = [
  {
    label: '.com',
    value: '.com',
  },
  {
    label: '.net',
    value: '.net',
  },
  {
    label: '.org',
    value: '.org',
  },
];

const Banner = () => {
  const [state, setState] = useState({
    domainName: '',
    tld: '',
  });
  const [priceRange, setPriceRange] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  function onChange(dateString) {
    // console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  function onOk(value) {
    console.log('onOk: ', value);
  }
  
  const onPriceRangeChange = value => {
    setPriceRange(value);
  };
  const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box as="form" sx={styles.domainCard} onSubmit={handleSubmit}>
            <Heading>Let us source your next dumpster.</Heading>
            <Label htmlFor="username">What size dumpster do you need?</Label>
            {/* <Input name="username" id="username" mb={3} /> */}
            <Row style={{marginTop: '0.5rem'}} gutter={16}>
              <Col className="gutter-row" span={8}>
              <ButtonAntd type="default" size="large">
              6 Yard
            </ButtonAntd>
              </Col>
              <Col className="gutter-row" span={8}>
              <ButtonAntd type="default" size="large">
              10 Yard
            </ButtonAntd>
              </Col>
              <Col className="gutter-row" span={8}>
              <ButtonAntd type="default" size="large">
              15 Yard
            </ButtonAntd>
              </Col>
            </Row>
            <Row gutter={16} style={{marginTop: '1rem'}}>
              <Col className="gutter-row" span={8}>
              <ButtonAntd type="default" size="large">
              20 Yard
            </ButtonAntd>
              </Col>
              <Col className="gutter-row" span={8}>
              <ButtonAntd type="default" size="large">
              30 Yard
            </ButtonAntd>
              </Col>
              <Col className="gutter-row" span={8}>
              <ButtonAntd type="default" size="large">
              40 Yard
            </ButtonAntd>
              </Col>
            </Row>

            <Label style={{marginTop: '1rem'}} htmlFor="">How many days will you need it for?</Label>
            <RangePicker
            style={{marginTop: '0.5rem'}}
              format="YYYY-MM-DD"
              onChange={onChange}
              onOk={onOk}
            />

            <Label style={{marginTop: '1rem'}} htmlFor="">What's your price range?</Label>
            <Row style={{marginTop: '0.5rem'}}>
        <Col span={16}>
          <Slider
            min={1}
            max={10000}
            onChange={onPriceRangeChange}
            value={typeof priceRange === 'number' ? priceRange : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={10000}
            style={{ margin: '0 16px' }}
            value={priceRange}
            onChange={onPriceRangeChange}
          />
        </Col>
      </Row>
      <Label style={{marginTop: '1rem'}} htmlFor="">Any special requirements?</Label>
      <TextArea style={{marginTop: '0.5rem'}} allowClear  rows={4} />
      <Label style={{marginTop: '1rem'}} htmlFor="">What's your email address?</Label>
      <Input style={{marginTop: '0.5rem'}}  prefix={<AiOutlineMail />} />
            {/* <Flex sx={styles.inputGroup}>
              <Label htmlFor="domainName" variant="styles.srOnly">
                Your Domain Name
              </Label>
              <Input
                type="text"
                id="domainName"
                value={state.domainName}
                onChange={handleChange}
                placeholder="Your domain name"
              />
              <Label htmlFor="tld" variant="styles.srOnly">
                Select TLD
              </Label>
              <Select id="tld" defaultValue={state.tld} onChange={handleChange}>
                {tlds.map((tld, i) => (
                  <option key={i}>{tld.label}</option>
                ))}
              </Select>
            </Flex> */}
            <Button type="submit" variant="primary" sx={styles.submit}>
              Find a Dumpster
            </Button>
            <Text as="p" sx={styles.note}>
              No credit card required.
            </Text>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image src={serverRack} loading="lazy" alt="sever-rack" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  illustration: {
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
  grid: {
    gap: ['30px 60px', null, null, null, '30px 40px', '30px 60px'],
    display: 'grid',
    minHeight: [null, null, null, null, null, '66vh', '81vh'],
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      'repeat(2, 1fr)',
      '510px 1fr',
    ],
  },
  domainCard: {
    background: 'white',
    boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
    borderRadius: 10,
    p: ['30px 25px 50px', null, null, '40px 40px 60px'],
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 480, 'none'],
    h2: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 9, 14],
      lineHeight: 1.36,
      letterSpacing: 'heading',
      color: 'textSecondary',
      mb: [5, null, null, 7, 8],
    },
  },
  inputGroup: {
    alignItems: 'center',
    border: (theme) => `1px solid ${theme.colors.borderColor}`,
    borderRadius: 5,
    px: [3, null, null, 6],
    input: {
      border: 0,
      borderRadius: 0,
      fontSize: [1, null, null, 2],
      minHeight: [45, null, null, 60],
      p: 0,
      ':focus': {
        boxShadow: 'none',
      },
      '::placeholder': {
        fontSize: '15px',
        lineHeight: 1.33,
        color: rgba('#02073E', 0.4),
      },
      ':-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 30px white inset !important',
      },
    },
    select: {
      border: 0,
      color: 'textSecondary',
      fontWeight: 500,
      fontSize: [0, null, null, '15px'],
      lineHeight: 1.33,
      letterSpacing: 'heading',
      minHeight: [45, null, null, 60],
      minWidth: [60, null, null, 75],
      p: 0,
      textTransform: 'uppercase',
      ':focus': {
        outline: 0,
      },
      '+ svg': {
        color: '#A6A8BB',
        height: 40,
        width: 40,
      },
    },
  },
  submit: {
    fontSize: [1, null, null, 2],
    mt: [4],
    minHeight: [45, null, null, 60],
    width: '100%',
  },
  note: {
    fontStyle: 'italic',
    fontSize: [0, null, null, '15px'],
    lineHeight: 1.33,
    textAlign: 'center',
    color: rgba('#02073E', 0.5),
    mt: [4],
  },
};
