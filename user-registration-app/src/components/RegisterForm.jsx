import { StartExecutionCommand, SFNClient } from "@aws-sdk/client-step-functions";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

const REGION = "us-east-1";
const IDENTITY_POOL_ID = "us-east-1_h7p1JTEWW";
const STATE_MACHINE_ARN = "arn:aws:states:us-east-1:800802900236:stateMachine:fullstack-flow";

const client = new SFNClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: REGION },
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

async function triggerStepFunction(name, email) {
  try {
    const input = {
      user: { name, email }
    };

    const command = new StartExecutionCommand({
      stateMachineArn: STATE_MACHINE_ARN,
      input: JSON.stringify(input),
    });

    const result = await client.send(command);
    console.log("Execution ARN:", result.executionArn);
    return result;
  } catch (err) {
    console.error("Failed to start Step Function:", err);
  }
}
