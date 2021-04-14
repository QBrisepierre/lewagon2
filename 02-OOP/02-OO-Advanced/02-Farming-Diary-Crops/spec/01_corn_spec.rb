require_relative "helper/file_helper.rb"

begin
  require "corn"
rescue LoadError
end

corn_helper = FileHelper.new(
  file_name: "corn",
  class_name: "Corn"
)

describe "Corn", unless: corn_helper.file_and_class_valid? do
  it '`corn.rb` file should exist' do
    expect(corn_helper.file_exists?).to be(true)
  end

  it '`Corn` class should be defined' do
    expect(corn_helper.class_defined?).to be(true)
  end
end


describe "Corn", if: corn_helper.file_and_class_valid? do

  let(:corn) { Corn.new }


  describe '#initialize' do
    it 'should not take any parameters' do
      initialize_parameters_count = Corn.allocate.method(:initialize).arity
      expect(initialize_parameters_count).to eq 0
    end

    it "should define an instance variable @grains" do
      expect(corn.instance_variable_get(:@grains)).to eq 0
    end
  end

  describe '#water!' do
    it 'should implement a method to water the corn' do
      Corn.public_method_defined? :water!
    end

    it 'should add 10 grains to the corn' do
      corn.water!
      expect(corn.instance_variable_get(:@grains)).to eq 10
      corn.water!
      expect(corn.instance_variable_get(:@grains)).to eq 20
    end
  end

  describe '#ripe?' do
    it 'should implement a method to test if the corn is ripe' do
      Corn.public_method_defined? :ripe?
    end

    it 'should return true when the grains is over or equal to 20' do
      expect(corn.ripe?).to be false
      corn.instance_variable_set(:@grains, 20)
      expect(corn.ripe?).to be true
    end
  end

  describe '#grains' do
    it "has appropriate getters and/or setters" do
      expect(corn).to respond_to :grains
      expect(corn).not_to respond_to(:grains=)
    end
  end
end