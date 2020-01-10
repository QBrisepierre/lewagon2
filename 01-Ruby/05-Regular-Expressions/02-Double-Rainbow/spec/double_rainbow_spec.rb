require "double_rainbow"

describe "#color_of_heroku" do
  it "should return the color of the Heroku logo" do
    sentence = "purple79589"
    expect(color_of_heroku(sentence)).to eq "purple"
    display_colorized("Heroku", 53)
  end
  it "should use a valid regex" do
    test_string = "209YOU56ME"
    expect(color_of_heroku(test_string)).to eq "YOU"
  end
end

describe "#color_of_postgresql" do
  it "should return the color of the postgresql logo" do
    sentence = "somewhatbetweenblueandindigo"
    expect(color_of_postgresql(sentence)).to eq "indigo"
    display_colorized("postgresql", 25)
  end
  it "should use a valid regex" do
    test_string = "abcdefghijklmn" 
    expect(color_of_postgresql(test_string)).to eq "ijklmn"
  end
end

describe "#color_of_css3" do
  it "should return the color of the CSS3 logo" do
    sentence = %({
      Roses are red,
      Violets are blue,
      Sugar is sweet,
      And so are you.
    })
    expect(color_of_css3(sentence)).to eq "blue"
    display_colorized("CSS3", 27)
  end
  it "should use a valid regex" do
    test_string = " aaaa bbbb, ,cccc"
    expect(color_of_css3(test_string)).to eq "bbbb"
  end
end

describe "#color_of_rake" do
  it "should return the color of a perfect rake" do
    sentence = "red or green?"
    expect(color_of_rake(sentence)).to eq "green"
    display_colorized("rake", 36)
  end
  it "should use a valid regex" do
    test_string = "me? you!"
    expect(color_of_rake(test_string)).to eq "me"
  end
end

describe "#color_of_javascript" do
  it "should return the color of the Javascript logo" do
    sentence = "black letters on a yellow background"
    expect(color_of_javascript(sentence)).to eq "yellow"
    display_colorized("Javascript", 226)
  end
  it "should use a valid regex" do
    test_string = "hello from thes specs"
    expect(color_of_javascript(test_string)).to eq "hello"
  end
end

describe "#color_of_html5" do
  it "should return the color of the HTML5 logo" do
    sentence = %({
      The new logo of Firefox has evolved to a more iconized style.
      The color scheme stays the same, with red, orange and yellow shades.
    })
    expect(color_of_html5(sentence)).to eq "orange"
    display_colorized("HTML5", 202)
  end
  it "should use a valid regex" do
    test_string = "egnaro is spelled backward"
    expect(color_of_html5(test_string)).to eq "egnaro"
  end
end

describe "#color_of_ruby" do
  it "should return the color of the Ruby logo" do
    sentence = %({
      Ruby is a dynamic open source programming language.
      Elegant syntax, easy to write...Definitely a progammer's best friend.
    })
    expect(color_of_ruby(sentence)).to eq "RED"
    display_colorized("Ruby", 196)
  end
  it "should use a valid regex" do
    test_string = "ManY COLORS"
    expect(color_of_ruby(test_string)).to eq "MYCOLORS"
  end
end


def display_colorized(name, color)
  puts "\n"
  puts "  \e[48;5;#{color};38;5;15m#{' '*30}\e[0m"
  puts "  \e[48;5;#{color};38;5;15m#{name.center(30)}\e[0m"
  puts "  \e[48;5;#{color};38;5;15m#{' '*30}\e[0m"
  puts "\n"
end
