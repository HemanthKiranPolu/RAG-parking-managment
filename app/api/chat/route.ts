import { NextRequest, NextResponse } from 'next/server';
import { pipeline } from 'transformers';
import { AutoTokenizer, AutoModelForSeq2SeqLM } from 'transformers';

// Function to load the model and tokenizer
const loadModel = async () => {
  const tokenizer = await AutoTokenizer.from_pretrained("facebook/rag-token-nq");
  const model = await AutoModelForSeq2SeqLM.from_pretrained("facebook/rag-token-nq");
  return { tokenizer, model };
};

// The main chat handler function
export async function POST(req: NextRequest) {
  try {
    // Validate request body
    const body = await req.json();
    if (!body || !body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: 'Invalid request format: messages array is required.' },
        { status: 400 }
      );
    }

    const { messages } = body;
    if (messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array cannot be empty.' },
        { status: 400 }
      );
    }

    // Get the user message
    const userMessage = messages[messages.length - 1].content;

    // Ensure the last message is from the user
    if (messages[messages.length - 1].role !== 'user') {
      return NextResponse.json(
        { error: 'The last message must be from the user.' },
        { status: 400 }
      );
    }

    // Load the model and tokenizer
    const { tokenizer, model } = await loadModel();

    // Prepare the input for the model
    const inputs = tokenizer(userMessage, { return_tensors: "pt" });

    // Generate a response using the model
    const outputs = await model.generate(inputs.input_ids, { max_length: 50 });
    const responseText = tokenizer.decode(outputs[0], { skip_special_tokens: true });

    // Return the response
    return NextResponse.json({
      reply: responseText,
      source: 'RAG model',
    });
  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json(
      {
        error: 'Failed to process request.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';
