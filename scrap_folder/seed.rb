xml = File.open("old_site.xml")
data = Hash.from_xml(xml)

console.log(data)