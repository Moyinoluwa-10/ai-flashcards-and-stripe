'use client'

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";


export default function Home() {
  console.log(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
  return (
    <Box>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{flexGrow: 1}}>
          Flashcard SaaS
        </Typography>
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <SignedOut>
          <Button color="inherit" href="/sign-in">Login</Button>
          <Button color="inherit" href="/sign-up">Sign Up</Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </ClerkProvider>
      </Toolbar>
    </AppBar>

    
    <Box sx={{textAlign: 'center', my: 4}}>
    <Typography variant="h2" component="h1" gutterBottom>
      Welcome to Flashcard SaaS
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      The easiest way to create flashcards from your text.
    </Typography>
    <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
      Get Started
    </Button>
    <Button variant="outlined" color="primary" sx={{mt: 2}}>
      Learn More
    </Button>
    </Box>

    </Box>
  );
}
