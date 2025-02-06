import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';


export interface User {
  token?: string;
  fullName: string;
  email: string;
  userId: string;
  username: string;
}

export interface loginResponse {
  email: string;
  password: string;
}

export interface LoginApiResponse {
  data: {
    fullName: string;
    email: string;
    userId: string;
    username: string;
  }; 
 token: string; 
}
export interface ApiError {
  message: any; 
}
export interface AuthState {
  loading: boolean;      
  error: string | null;  
  user: User | null;  
  token?: string;  
}

export interface RegisterFormValues {
  id?: string;          
  fullName: string;      
  username: string;     
  email: string;         
  password: string;      
}

export interface Article {
  title: string;                    
  backgroundImage: ImageSourcePropType; 
}

export interface Question {
  _id: string;
  quizId: string;
  id: string;               
  questionText: string;     
  options: string[];        
  correctAnswer: string;    
}

export interface QuizData {
  title: string;              
  questions: Question[];      
  rightAnswerPoints: number;  
  wrongAnswerPoints: number; 
  totalTime: string;         
  description: string;      
}

export interface AllQuizData {
  mathematics: QuizData;
  science: QuizData;
  english: QuizData;
  technology: QuizData;
  medical: QuizData;
  programming: QuizData;
  art: QuizData;
  coding: QuizData;
  sports: QuizData;
}

export type RootStackParamList = {
  SplashScreen:undefined;
  SplashKnowledgeScreen:undefined;
  Home: undefined;
  Quiz: undefined;
  Questions: undefined;
  Login: undefined;
  MyTabs: undefined;
  ForgotPassword: undefined;
  Register: undefined;
  Verification: { email: string };
  ResetPassword: undefined;
  TechnologyCardScreen:undefined;
  StartQuizScreen: { quizData: QuizData };

  ResultQuizScreen: { 
    // questions: Question[]; 
    // answers: string[]; 
    resultData: string[]
  };  
  // ResultQuizScreen: { resultData: any };
  MyProfile: undefined;
  CompletedQuiz:undefined;
  PrivacyPolicyScreen: undefined;
  TermsConditionScreen: undefined;
  HelpCenterScreen: undefined;
  AboutUsScreen:undefined;
  Settings:undefined;
  Notification:undefined;
  EditProfile: undefined;
  // QuestionsScreen:undefined;
  QuestionsScreen: { questions: any[] };
  Categories:undefined;
  QuizOverview:undefined;
  TabScreen:undefined;
  MindblowingScreen:undefined;
};

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;

export type VerificationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Verification'
>;

export interface LogoutApiResponse {
  response:string
}

export interface VerificationScreenProps {
  email: string; 
}

export interface ResetPasswordRequest {
  email: string;    
  newPassword: string;
  oldPassword: string; 
}

export interface ModelPopUpProps {
  visible: boolean;     
  onClose: () => void;  
  answers: string[];  
  questions: Question[]; 
  id?: string | null;
 
}

export type DocumentPickerResponse = {
  uri: string;
  name: string | null;
  copyError?: string;
  fileCopyUri: string | null;
  type: string | null;
  size: number | null;
};

export interface CheckboxItem {
  status: 'checked' | 'unchecked' | 'indeterminate';
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}


export interface Result {
  score: number;
  totalQuestions: number;
  totalPercentage?: number;  
  passFail?: 'pass' | 'fail'; 
}
export const initialValues = {
  fullName: '',
  username: '',
  email: '',
  password: '',
};

