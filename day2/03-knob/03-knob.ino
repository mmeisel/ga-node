int potPin = A0;
int lastDegrees = -1;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int reading = analogRead(potPin);
  int degrees = map(reading, 0, 1023, 0, 360);

  if (degrees != lastDegrees) {
    Serial.println(degrees);
    lastDegrees = degrees;
  }
}
