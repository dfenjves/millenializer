// buzzword-replacerator - Replace common buzzwords with more accurate descriptions.
// Copyright (C) 2013  Amanda Folson <amanda@incredibl.org>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	// Which I stole from here:
	// https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
	var child, next;
	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
				while ( child )
				{
					next = child.nextSibling;
					walk(child);
					child = next;
				}
			break;
		case 3: // Text node
			deBullshit(node);
			break;
		}
}

function deBullshit(textNode)
{
  let price = textNode.nodeValue.match(/(?<=\$)[\d|,]+/)

  console.log("The Price Is:")
  console.log(price)
	// Hi, I hope you like slow browsing experiences.
  textNode.nodeValue = textNode.nodeValue
  .replace(/(?<=\$)[\d|,]+/, price + " 🥑").replace(/\$/g,"")
}
