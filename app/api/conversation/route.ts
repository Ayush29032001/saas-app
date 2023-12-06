import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

const openAi = new OpenAI();
const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    if (!userId) {
      return new NextResponse('Unauthorised', { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse('OpenAI key not configured', {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const response = await openAi.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    });

    return new NextResponse(response.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
