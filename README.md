## Cloudformation Deployment

1. From main directory, in terminal, run `sam build`
2. Once build is complete, run `sam deploy` in terminal

## Contact Flow Setup

1. Under the `Integrate` tab on the left, select the `Invoke AWS Lambda function` block. To setup the lambda function block, do the following:
   a. Select `Select a function` and insert the ARN from the function created with the SAM template
   b. Select `Use attribute` and enter `customerName` into the `Destination key` input box
   c. Set the `Type` value to `System` and the `Attribute` value to `Customer Number`

2. Under the `Interact` tab on the left, select the `Play prompt` block, and connect the `Error` output from the lambda function to this.
   a. Select `Text-to-speech or chat text` then select `Enter text`
   b. Enter `There has been an error, please call back` into the text box

3. Under the `Set` tab on the left, select the `Set contact attributes` block and connect the `Success` output from the lambda function to it. To setup this block, do the following:
   a. Under `Destination Type` select `User Defined` and set the `Destination Attribute` value to vanityNumbers
   b. Select `Use attribute` and set the `Attribute` value to `$.External.vanityNumbers`

4. Connect the `Error` output from the previous step to the `Play prompt` block from step 2.

5. Under the `Interact` tab on the left, select the `Play prompt` block, and connect the `Success` output from the `Set contact attributes` block to this.
   a. Select `Text-to-speech or chat text` then select `Enter dynamically`
   b. Under `Type` select `User Defined` and set the `Attribute` value to `vanityNumbers`

6. Under the `Terminate / Transfer` tab on the left, select the `Disconnect` block, then connect the `Play prompt` blocks from steps 2 and 4.
