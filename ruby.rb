# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    # attribute accessor is used in place of get and set values. Making pedal_faster and brake along with bike info caused issues when using rspec ruby_spec.rb so I kept it reduced to model wheels &current speed.
    attr_accessor :model, :wheels, :current_speed
    # Using the initialize method on everything that was placed in line 11 to initialize the super class
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
        
    end
    # Setting up pedal_faster method increases the current speed 
    def pedal_faster(speed)
        @current_speed += speed
    end
    # Setting the brake method up around decreasing the current speed and preventing negative speeds 
    def brake(speed)
        @current_speed -= speed
        @current_speed = 0 if current_speed < 0
        @current_speed
    end
    # Setting bike_info method returns a string with the same objects utilized in the attr_accessor
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

end

    # Making pedal_faster and brake along with bike info caused issues when using rspec ruby_spec.rb so I kept it reduced to model, wheels, & current speed.
    # 