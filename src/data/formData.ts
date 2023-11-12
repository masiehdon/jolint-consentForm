type DataProps = {
  index?: number;
  title?: string;
  section?: string;
  sectionId?: number;
  content?: string;
  subContent?: string;
  end?: string;
  click?: boolean;
  icon?: number;
  id: number;
  consent?: {
    Name: string;
    Date: string;
    Signature: string;
  };
};

const formData: DataProps[] = [
  {
    id: 1,
    section: 'Introduction',
    sectionId: 1,
    content: 'Empower your workplace by authorizing consent for reliable data to enhance inclusion and belonging. Click on the steps below to read and access the consent form.', 
    click: true
  },
  {
      id: 2,
        index: 1 ,
        title: 'Introduction',
      content: '1.1.  [Company Name] (the “Company”) has engaged Jolint Network Analytics AB (“Jolint”) to provide services to analyse the social structures of our organisation and to identify drivers and barriers to inclusion and belonging in the workplace. The analysis will use data generated within the organisation on a daily basis. To do so, we need to obtain your consent for the processing of your personal data.',
      icon: 1,
      click: false,
    },
  {
      id: 3,
        index: 2 ,
        title: 'Personal Data',
        content: '2.1.  The personal data that we will process may include, but is not limited to: your name, email address, department, as well as internal communication metadata and information about meetings.',
      subContent: '1. 1  To clarify; the content of communications and calendars is never viewed nor processed.As such, Jolint will only be processing the metadata associated with those communication channels.This includes information such as frequency and duration of interactions, which is analysed in order to identify patterns and trends that can help improve the Company culture so as to ensure that all employees feel included and valued.',
      icon: 2,
        click: false
    },
  {
      id: 4,
      section: 'Purpose',
      sectionId: 2,
      content: 'Empower your workplace by authorizing consent for reliable data to enhance inclusion and belonging. Click on the steps below to read and access the consent form.',
      click: true
    },
  {
      id: 5,
        index: 3 ,
        title: 'Purpose of Processing',
        content: '3.1   The purpose of processing your personal data is to enable Jolint to provide the services as described above. The processing of your personal data will help us to improve inclusion and belonging in our organisation and create a more diverse and inclusive workplace.',
      subContent: '1.1   To clarify; data collected will not be used for individual insights, but rather be processed on an aggregate level.This means that any insights or results obtained from the metadata will be presented in a way that makes it impossible to identify an individual.Thus, the focus will be on providing insights that assist the Company in creating a more inclusive workplace, improving opportunities for all employees.',
      icon: 3,
        click: false
    },
  {
      id: 6,
      section: 'Your Rights',
      sectionId: 3,
      content: 'Empower your workplace by authorizing consent for reliable data to enhance inclusion and belonging. Click on the steps below to read and access the consent form.',
        click: true
    },
  {
      id: 7,
        index: 4 ,
        title: 'Lawful Basis for Processing',
      content: '4.1.  The lawful basis for processing your personal data is your consent, as provided by you below.',
      icon: 4,
        click: false
    }, 
  {
      id: 8,
        index: 5 ,
        title: 'Duration of Processing',
      content: '5.1.  Your personal data will be processed for the duration of the provision of the services by Jolint. After the services have been provided, your personal data will be deleted or anonymised, except where retention is required by law.',
      icon: 5,
        click: false
    }, 
  {
      id: 9,
        index: 6 ,
        title: 'Your Rights',
      content: '6.1  You have the right to withdraw your consent at any time, without affecting the lawfulness of the processing based on consent before its withdrawal. You also have the right to access, rectify, erase, and restrict the processing of your personal data, as well as the right to data portability and to object to the processing of your personal data.',
      icon: 6,
        click: false
    },
  {
      id: 10,
      section: 'Consent',
      sectionId: 4,
      content: 'Empower your workplace by authorizing consent for reliable data to enhance inclusion and belonging.Click on the steps below to read and access the consent form.',
        click: true
    },
  {
    id: 11,
    index: 7,
    title: 'Data Controller and Processor',
    content: '7.1.  [Company Name] is the data controller for the personal data processed under this Agreement, and Jolint is the data processor.',
    icon: 7,
    click: false
  },
  {
      id: 12,
        index: 8 ,
        title: 'Contact Information',
      content: '8.1.  If you have any questions or concerns about the processing of your personal data, please contact [insert contact details for data protection officer or other responsible person].',
      icon: 8,
        click: false
    },
  {
      id: 13,
        index: 9 ,
        title: ' Consent',
        content: '1   By signing below, I hereby consent to the processing of my personal data as described above.',
        consent:
        {
            Name: '___________________________',
            Date: '____________________________',
            Signature: '_________________________'
      },
      icon: 9,
        click: false
    },
  {
    id: 14,
      
      section: 'Submit',
      sectionId: 5,
    content: 'Empower your workplace by authorizing consent for reliable data to enhance inclusion and belonging. Click on the steps below to read and access the consent form.',
        click: true
    },
  {
      id: 15,
      
      end: 'Thank',
      click: false
      
    },
   
]

export default formData;